<?php

namespace App\Http\Controllers;

use App\Models\Country;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AddressController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return inertia('Address/Index', [
            'addresses' => Auth::user()->addresses()->get(),
            'countries' => Country::all()
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
        $request->user()->addresses()->create(
            $request->validate(
                [
                    'name' => 'required|max:255',
                    'phone' => 'required|max:15',
                    'address' => 'required|max:255',
                    'city' => 'required|max:255',
                    'postal_code' => 'required|numeric',
                    'state' => 'required|max:255',
                    'country' => 'required',
                ],
                [
                    'postal_code.required' => 'The postal code field is required',
                    'postal_code.numeric' => 'The postal code field is must be a number',
                ]
            )
        );

        return redirect()->route('address.index')->with('message', 'New address successfully added!');
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
