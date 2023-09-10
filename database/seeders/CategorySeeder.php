<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $categories = [
            ['name' => 'Fantasy'],
            ['name' => 'Romance'],
            ['name' => 'General Fiction'],
            ['name' => 'Science Fiction'],
            ['name' => 'Crime & Thriller'],
            ['name' => 'Action & Adventure'],
            ['name' => 'Family & Friendship'],
            ['name' => 'Horror & Paranormal'],
            ['name' => 'Economics'],
            ['name' => 'Self Help'],
            ['name' => 'Literature'],
            ['name' => 'Inspirational'],
            ['name' => 'Sports & Hobbies'],
            ['name' => 'Science & Medicine'],
            ['name' => 'Accounting & Finance'],
            ['name' => 'Computing & Internet'],
        ];

        foreach ($categories as $value) {
            Category::create($value);
        }
    }
}
