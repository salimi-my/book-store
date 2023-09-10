<?php

namespace App\Http\Controllers;

use App\Models\Address;
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
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // Check if there any default address
        $default_address_exist = $request->user()->addresses()->where('default', '=', 'yes')->first();

        $request->user()->addresses()->create(
            array_merge(
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
                ),
                ['default' => $default_address_exist ? 'no' : 'yes']
            )
        );

        return redirect()->route('address.index')->with('message', 'New address successfully added!');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Address $address)
    {
        $address->update(
            $request->validate(
                [
                    'name' => 'required|max:255',
                    'phone' => 'required|max:15',
                    'address' => 'required|max:255',
                    'city' => 'required|max:255',
                    'postal_code' => 'required|numeric',
                    'state' => 'required|max:255',
                    'country' => 'required'
                ],
                [
                    'postal_code.required' => 'The postal code field is required',
                    'postal_code.numeric' => 'The postal code field is must be a number',
                ]
            )
        );

        return redirect()->route('address.index')->with('message', 'Address successfully updated!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Address $address)
    {
        $address->deleteOrFail();

        return redirect()->route('address.index')->with('message', 'Address successfully deleted!');
    }
}
