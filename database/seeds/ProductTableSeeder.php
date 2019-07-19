<?php

use Illuminate\Database\Seeder;
use App\Models\Product;

class ProductTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Product::create([
            "name" => "Play Station 4",
            "price" => 900,
            "category_id" => "MLB0001",
            "description" => "Informações sobre o ps4."
        ]);

        Product::create([
            "name" => "Controle PS4",
            "price" => 50,
            "category_id" => "MLB0002",
            "description" => "Informações sobre o controle de  ps4."
        ]);

        Product::create([
            "name" => "FIFA PS4",
            "price" => 150,
            "category_id" => "MLB0003",
            "description" => "Informações sobre o fifa."
        ]);

        // Product::updateOrCreate([
        //     'name' => "Play Station 4 + 2 Controles + Fifa 2019",
        //     "description" => "Descrição sobre o kit",
        //     "price" => 1150.00,
        //     "kit" => true,
        //     "compositions" => [
        //         1,
        //         2 => 2, // id + quantidade de produtos que compoem o kit.
        //         3
        //     ]
        // ]);
    }
}
