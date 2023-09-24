<?php

namespace App\Http\Controllers;

use App\Models\Country;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CheckoutController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return inertia('Checkout/Index', [
            'addresses' => Auth::user()->addresses()->orderBy('default', 'asc')->get(),
            'countries' => Country::all()
        ]);
    }
}
