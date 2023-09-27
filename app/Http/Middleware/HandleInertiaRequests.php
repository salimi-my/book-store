<?php

namespace App\Http\Middleware;

use App\Models\Cart;
use Illuminate\Http\Request;
use Inertia\Middleware;
use Tightenco\Ziggy\Ziggy;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): string|null
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        return array_merge(parent::share($request), [
            'domain' => env('APP_URL'),
            'flash' => [
                'message' => fn () => $request->session()->get('message')
            ],
            'auth.user' => fn () => $request->user()
                ? $request->user()->only('id', 'name', 'email', 'phone', 'avatar', 'src')
                : null,
            'ziggy' => function () use ($request) {
                return array_merge((new Ziggy)->toArray(), [
                    'location' => $request->url(),
                ]);
            },
            'carts' => function () use ($request) {
                if ($request->user()) {
                    return $request->user()->carts()->withoutCheckout()->with('bookOwner')->get();
                } else {
                    $cartIds = $request->session()->get('carts');
                    if ($cartIds) {
                        return Cart::whereIn('id', $cartIds)->withoutCheckout()->with('bookOwner')->get();
                    } else {
                        return [];
                    }
                }
            }
        ]);
    }
}
