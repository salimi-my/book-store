import { useState } from "react";
import { Trash } from "lucide-react";
import { useForm } from "@inertiajs/react";
import { Button, Tooltip } from "flowbite-react";

import Modal from "@/Components/Modal";

export default function AddressDelete({ address }) {
  const [openModal, setOpenModal] = useState(false);

  const { delete: destroy, processing } = useForm();

  const deleteAddress = (e) => {
    e.preventDefault();

    destroy(route("address.destroy", address.id), {
      preserveScroll: true,
      onSuccess: () => closeModal(),
    });
  };

  const closeModal = () => {
    setOpenModal(false);
    reset();
  };

  return (
    <>
      <Tooltip content="Delete address">
        <Button
          onClick={() => setOpenModal(true)}
          className="px-0"
          color="failure"
          size="xs"
        >
          <Trash className="w-4 h-4" />
        </Button>
      </Tooltip>

      <Modal show={openModal} onClose={closeModal}>
        <form onSubmit={deleteAddress} className="p-6">
          <h2 className="text-lg font-medium text-gray-900">
            Are you sure you want to delete this address?
          </h2>

          <p className="mt-1 text-sm text-gray-600">
            Once address is deleted, the data will be permanently deleted.
          </p>

          <div className="mt-6 flex justify-end">
            <Button color="light" type="button" onClick={closeModal}>
              Cancel
            </Button>
            <Button
              color="failure"
              type="submit"
              className="ml-3"
              disabled={processing}
            >
              Delete Address
            </Button>
          </div>
        </form>
      </Modal>
    </>
  );
}
