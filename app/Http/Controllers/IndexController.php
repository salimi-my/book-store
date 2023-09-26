<?php

namespace App\Http\Controllers;

use App\Models\Book;
use Illuminate\Http\Request;

class IndexController extends Controller
{
    public function index()
    {
        return inertia('Landing', [
            'randomBooks' => Book::inRandomOrder()->limit(10)->get()
        ]);
    }
}
