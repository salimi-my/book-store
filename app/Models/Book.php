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
        )->when(
            $filters['publisher'] ?? false,
            fn ($query, $value) => $query->whereIn('publisher', explode(',', $value))
        )->when(
            $filters['price'] ?? false,
            fn ($query, $value) => $query->where(function ($query)  use ($value) {
                $ranges = explode(',', $value);
                foreach ($ranges as $range) {
                    $rangeArray = explode('-', $range);
                    $query->orWhere(function ($query)  use ($rangeArray) {
                        $query->where('price', '>=', $rangeArray[0])->where('price', '<', $rangeArray[1]);
                    });
                }
            })
        );
    }
}
