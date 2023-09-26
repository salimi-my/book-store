import { Link, router } from "@inertiajs/react";
import { Button, Tooltip } from "flowbite-react";
import { Eye } from "lucide-react";

export default function Order({ order, first }) {
  const order_date = new Date(order.created_at).toLocaleDateString("en-MY", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  const order_total = order.total.toLocaleString("en-MY", {
    style: "currency",
    currency: "MYR",
    maximumFractionDigits: 2,
  });

  return (
    <div className="flex flex-col">
      {!first && <hr className="my-6 border-gray-300 dark:border-gray-600" />}
      <div className="flex flex-col md:flex-row justify-between space-y-2 md:space-y-0">
        <div className="flex space-x-1 md:order-2">
          <Tooltip content="Order Detail">
            <Button
              onClick={() => router.get(route("order.show", order.order_no))}
              className="px-0 py-1"
              color="light"
              size="xs"
            >
              <Eye className="w-4 h-4" />
            </Button>
          </Tooltip>
        </div>
        <div className="flex items-center">
          <Link
            href={route("order.show", order.order_no)}
            className="pr-2 border-r border-gray-300 dark:border-gray-600 font-semibold dark:text-white hover:underline underline-offset-2"
          >
            Order ID: {order.order_no}
          </Link>
          <p className="pl-2 text-gray-500 dark:text-gray-400 font-medium text-xs">
            {order.paid_at && (
              <span className="text-green-400 border border-green-400 rounded-md px-1">
                PAID
              </span>
            )}
            {!order.paid_at && (
              <span className="text-red-500 border border-red-500 rounded-md px-1">
                UNPAID
              </span>
            )}
          </p>
        </div>
      </div>
      <div className="table text-gray-500 dark:text-gray-400 text-sm">
        <div className="table-row">
          <div className="table-cell w-32">Created</div>
          <div className="table-cell w-3">:</div>
          <div className="table-cell">{order_date}</div>
        </div>
        <div className="table-row">
          <div className="table-cell w-32">Collection Method</div>
          <div className="table-cell w-3">:</div>
          <div className="table-cell">Shipping</div>
        </div>
        <div className="table-row">
          <div className="table-cell w-32">Order Total</div>
          <div className="table-cell w-3">:</div>
          <div className="table-cell">{order_total}</div>
        </div>
        <div className="table-row">
          <div className="table-cell w-32">Payment Method</div>
          <div className="table-cell w-3">:</div>
          <div className="table-cell">Online Banking</div>
        </div>
      </div>
    </div>
  );
}
