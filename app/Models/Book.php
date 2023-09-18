<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Book extends Model
{
    use HasFactory;

    protected $fillable = ['type', 'title', 'description', 'image', 'isbn', 'author', 'publisher', 'stocks', 'pages', 'weight', 'price'];

    protected $sortable = ['price,asc', 'price,desc', 'title,asc', 'title,desc'];

    public function categories(): BelongsToMany
    {
        return $this->belongsToMany(Category::class, 'category_book');
    }

    public function carts(): HasMany
    {
        return $this->hasMany(Cart::class, 'book_id');
    }

    public function scopeFilter(Builder $query, array $filters): Builder
    {
        return $query->when(
            $filters['search'] ?? false,
            fn ($query, $value) => $query->where(function ($query)  use ($value) {
                $query->where('title', 'LIKE', '%' . $value . '%')
                    ->orWhere('isbn', 'LIKE', '%' . $value . '%')
                    ->orWhere('author', 'LIKE', '%' . $value . '%')
                    ->orWhere('publisher', 'LIKE', '%' . $value . '%');
            })
        )->when(
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
        )->when(
            !array_key_exists('sort', $filters) ?? false,
            fn ($query) => $query->orderBy('created_at', 'desc')
        )->when(
            $filters['sort'] ?? false,
            function ($query, $value) {
                $sortArr = explode(',', $value);
                !in_array($value, $this->sortable) ? $query : $query->orderBy($sortArr[0], $sortArr[1]);
            }
        );
    }


    public function getRouteKeyName(): string
    {
        return 'slug';
    }
}
