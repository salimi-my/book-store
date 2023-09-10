import { RefreshCw } from "lucide-react";
import { router } from "@inertiajs/react";
import { Button, Tooltip } from "flowbite-react";

export default function AddressDefault({ address }) {
  return (
    <Tooltip content="Set as default">
      <Button
        onClick={() => router.put(route("address.default", address.id))}
        className="px-0"
        color="light"
        size="xs"
        disabled={address.default === "yes" ? true : false}
      >
        <RefreshCw className="w-4 h-4" />
      </Button>
    </Tooltip>
  );
}
