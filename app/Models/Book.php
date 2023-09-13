<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Book extends Model
{
    use HasFactory;

    protected $fillable = ['type', 'title', 'description', 'image', 'isbn', 'author', 'publisher', 'stocks', 'pages', 'weight', 'price'];

    public function categories(): BelongsToMany
    {
        return $this->belongsToMany(Category::class, 'category_book');
    }

    public function scopeFilter(Builder $query, array $filters): Builder
    {
        return $query->when(
            $filters['type'] ?? false,
            fn ($query, $value) => $query->whereIn('type', explode(',', $value))
        )->when(
            $filters['category'] ?? false,
            fn ($query, $value) => $query->whereHas('categories', function ($query)  use ($value) {
                $query->whereIn('name', explode(',', $value));
            })
        )->when(
            $filters['author'] ?? false,
            fn ($query, $value) => $query->whereIn('author', explode(',', $value))
        );
    }
}
