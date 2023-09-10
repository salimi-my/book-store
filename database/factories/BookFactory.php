<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Book>
 */
class BookFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'type' => fake()->randomElement(['Fiction', 'Non-Fiction']),
            'title' => fake()->sentence(3),
            'description' => fake()->paragraph(),
            'image' => fake()->imageUrl(261, 400, 'book', true),
            'isbn' => fake()->isbn13(),
            'author' => fake()->firstName() . ' ' . fake()->lastName(),
            'publisher' => fake()->company(),
            'stocks' => fake()->numberBetween(0, 100),
            'pages' => fake()->numberBetween(50, 500),
            'weight' => fake()->numberBetween(20, 500),
            'price' => fake()->randomFloat(2, 10, 200)
        ];
    }
}
