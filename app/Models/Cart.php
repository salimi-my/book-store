<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

class Cart extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = ['quantity', 'checked_out'];

    public function bookOwner(): BelongsTo
    {
        return $this->belongsTo(Book::class, 'book_id');
    }

    public function userOwner(): BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}
