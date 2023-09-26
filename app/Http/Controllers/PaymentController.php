<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\Payment;
use Illuminate\Http\Request;

class PaymentController extends Controller
{
    /**
     * Display payment return data.
     */
    public function index(Request $request)
    {
        $params = $request->only([
            'status_id', 'billcode', 'order_id'
        ]);

        return inertia('Payment/Index', [
            'params' => $params,
            'order' => !empty($params['order_id']) ? Order::where('id', '=', $params['order_id'])->first() : null
        ]);
    }

    /**
     * Update the order's payment status.
     */
    public function update(Request $request)
    {
        $refno = $request->input('refno');
        $status = $request->input('status');
        $reason = $request->input('reason');
        $billcode = $request->input('billcode');
        $order_id = $request->input('order_id');
        $amount = $request->input('amount');

        // Update payment data
        Payment::where('order_id', '=', $order_id)->where('billcode', '=', $billcode)->update([
            'refno' => $refno,
            'status' => $status,
            'reason' => $reason,
            'amount' => $amount
        ]);

        // Check if payment status is successful
        if ($status == 1) {
            $order = Order::where('id', '=', $order_id)->first();

            // Update paid at
            if ($order->paid_at === NULL) {
                $order->update([
                    'paid_at' => now()
                ]);
            }
        }
    }
}
