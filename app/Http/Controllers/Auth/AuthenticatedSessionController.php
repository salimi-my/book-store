<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Models\Cart;
use App\Providers\RouteServiceProvider;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Inertia\Response;

class AuthenticatedSessionController extends Controller
{
    /**
     * Display the login view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Login', [
            'canResetPassword' => Route::has('password.request'),
            'status' => session('status'),
        ]);
    }

    /**
     * Handle an incoming authentication request.
     */
    public function store(LoginRequest $request): RedirectResponse
    {
        $request->authenticate();

        // associate session cart to logged in user if any
        if ($request->session()->has('carts')) {
            $cartIds = $request->session()->pull('carts');

            foreach ($cartIds as $cartId) {
                $sessionCart = Cart::where('id', '=', $cartId)->first();

                if ($sessionCart) {
                    $userCart = $request->user()->carts()->where('book_id', '=', $sessionCart->book_id)->withoutCheckout()->first();

                    if ($userCart) {
                        $newQuantity = $userCart->quantity + $sessionCart->quantity;
                        $userCart->update(['quantity' => $newQuantity]);

                        $sessionCart->deleteOrFail();
                    } else {
                        $sessionCart->userOwner()->associate($request->user())->save();
                    }
                }
            }
        }

        $request->session()->regenerate();

        return redirect()->intended(RouteServiceProvider::HOME);
    }

    /**
     * Destroy an authenticated session.
     */
    public function destroy(Request $request): RedirectResponse
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect('/');
    }
}
