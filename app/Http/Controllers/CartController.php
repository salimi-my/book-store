<?php

namespace App\Http\Controllers;

use App\Models\Book;
use App\Models\Cart;
use Illuminate\Http\Request;

class CartController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
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
        $bookId = $request->input('bookId');
        $bookQuantity = $request->input('bookQuantity');

        if ($request->user()) {
            $cart = $request->user()->carts()->where('book_id', '=', $bookId)->withoutCheckout()->first();

            if ($cart) {
                $newQuantity = $cart->quantity + $bookQuantity;
                $cart->update(['quantity' => $newQuantity]);
            } else {
                Book::find($bookId)->carts()->save(
                    Cart::make(
                        ['quantity' => $bookQuantity]
                    )->userOwner()->associate($request->user())
                );
            }
        } else {
            if ($request->session()->has('carts')) {
                $cartIds = $request->session()->get('carts');

                $cart = Cart::whereIn('id', $cartIds)->where('book_id', '=', $bookId)->withoutCheckout()->first();

                if ($cart) {
                    $newQuantity = $cart->quantity + $bookQuantity;
                    $cart->update(['quantity' => $newQuantity]);
                } else {
                    $cartId = Book::find($bookId)->carts()->create(['quantity' => $bookQuantity])->id;

                    $request->session()->push('carts', $cartId);
                    $request->session()->save();
                }
            } else {
                $cartId = Book::find($bookId)->carts()->create(['quantity' => $bookQuantity])->id;

                $request->session()->push('carts', $cartId);
                $request->session()->save();
            }
        }

        return redirect()->back();

        // $request->session()->forget('carts');
        // $request->session()->save();
        // dd($request->session()->get('carts'));
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
    public function update(Request $request, Cart $cart)
    {
        $bookQuantity = $request->input('bookQuantity');

        if ($bookQuantity > 0) {
            $cart->update(['quantity' => $bookQuantity]);
        } else {
            $cartIds = $request->session()->pull('carts');
            if (($key = array_search($cart->id, $cartIds)) !== false) {
                unset($cartIds[$key]);

                if (!empty($cartIds)) {
                    $request->session()->put('carts', $cartIds);
                    $request->session()->save();
                }
            }
            $cart->deleteOrFail();
        }

        return redirect()->back();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Cart $cart)
    {
        $cartIds = session('carts');
        if (($key = array_search($cart->id, $cartIds)) !== false) {
            unset($cartIds[$key]);

            if (!empty($cartIds)) {
                session(['carts' => $cartIds]);
            }
        }

        $cart->deleteOrFail();

        return redirect()->back();
    }
}
