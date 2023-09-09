<?php

namespace App\Http\Controllers;

use App\Models\Address;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AddressDefaultController extends Controller
{
    public function __invoke(Address $address)
    {
        // Set address as default
        $address->update(['default' => 'yes']);

        // Set other address as not default
        Auth::user()->addresses()->whereNotIn('id', [$address->id])->update(['default' => 'no']);

        return redirect()->route('address.index')->with('message', 'Address successfully set as default!');
    }
}
