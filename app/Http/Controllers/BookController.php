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
            'categories' => Category::orderBy('name', 'asc')->get(),
            'authors' => Book::select('author')->groupBy('author')->orderBy('author', 'asc')->get(),
            'publishers' => Book::select('publisher')->groupBy('publisher')->orderBy('publisher', 'asc')->get(),
            'books' => Book::filter($filters)
                ->paginate(12)
                ->withQueryString()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
