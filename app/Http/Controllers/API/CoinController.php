<?php

namespace App\Http\Controllers\API;

use App\Models\Coin;
use Illuminate\Http\Request;

class CoinController extends BaseController
{
    public function index()
    {
        $coins = [];

        if (auth()->user()->coins->count()){
            $coins = auth()->user()->coins()->pluck('name')->toArray();
        }

        return $this->handleResponse($coins, 'Success');
    }

    public function create()
    {
        // TODO
        // create form request validator
        // create repository for storing coins
        $coin = Coin::firstOrCreate([
            'name' => request()->input('coin'),
        ]);

        auth()->user()->coins()->attach($coin);

        return $this->handleResponse([], 'success');
    }

    public function delete()
    {

    }
}
