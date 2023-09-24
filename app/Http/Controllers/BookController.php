<?php

namespace App\Http\Controllers;

use App\Models\Book;
use App\Models\Category;
use Illuminate\Http\Request;

class BookController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $filters = $request->only([
            'search', 'page', 'type', 'category', 'author', 'publisher', 'price', 'sort'
        ]);

        return inertia('Book/Index', [
            'filters' => $filters,
            'categories' => Category::orderBy('name', 'asc')
                ->get(),
            'authors' => Book::select('author')
                ->groupBy('author')
                ->orderBy('author', 'asc')
                ->get(),
            'publishers' => Book::select('publisher')
                ->groupBy('publisher')
                ->orderBy('publisher', 'asc')
                ->get(),
            'books' => Book::filter($filters)
                ->paginate(12)
                ->withQueryString()
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Book $book)
    {
        return inertia('Book/Show', [
            'book' => $book,
            'relatedBooks' => Book::whereNot('id', '=', $book->id)
                ->where('type', '=', $book->type)
                ->inRandomOrder()->limit(10)
                ->get()
        ]);
    }
}
