<?php

namespace Database\Seeders;

use App\Models\Book;
use App\Models\Category;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class CategoryBookSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $books = Book::paginate(24);
        $categories = Category::paginate(16);

        foreach ($books as $book) {
            DB::table('category_book')->insert([
                'category_id' => rand(1, 16),
                'book_id' => $book->id
            ]);
        }

        foreach ($categories as $category) {
            DB::table('category_book')->insert([
                'category_id' => $category->id,
                'book_id' => rand(1, 24)
            ]);
        }
    }
}
