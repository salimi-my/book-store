<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\User;
use App\Models\Address;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::factory()->create([
            'name' => 'John Doe',
            'email' => 'johndoe@example.com',
        ]);

        User::factory()->create([
            'name' => 'Si Polan',
            'email' => 'sipolan@example.com',
        ]);

        Address::factory(1)->create([
            'user_id' => 1,
            'default' => 'yes'
        ]);

        Address::factory(1)->create([
            'user_id' => 1,
        ]);

        Address::factory(1)->create([
            'user_id' => 2,
            'default' => 'yes'
        ]);

        Address::factory(1)->create([
            'user_id' => 2,
        ]);

        $this->call([
            CountrySeeder::class,
            BookSeeder::class,
            CategorySeeder::class,
            CategoryBookSeeder::class
        ]);
    }
}
