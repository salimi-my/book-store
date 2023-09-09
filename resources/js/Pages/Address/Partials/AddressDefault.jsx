import { Button } from "flowbite-react";
import { RefreshCw } from "lucide-react";
import { router } from "@inertiajs/react";

export default function AddressDefault({ address }) {
  return (
    <Button
      onClick={() => router.put(route("address.default", address.id))}
      className="px-0"
      color="light"
      size="xs"
      disabled={address.default === "yes" ? true : false}
    >
      <RefreshCw className="w-4 h-4" />
    </Button>
  );
}
