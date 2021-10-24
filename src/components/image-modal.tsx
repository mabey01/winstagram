import { Dialog } from "@headlessui/react";

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ImageModal({ isOpen, onClose }: ImageModalProps) {
  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      className="fixed z-10 inset-0 overflow-y-auto"
    >
      <div className="flex items-center justify-center min-h-screen">
        <Dialog.Overlay
          onClick={onClose}
          className="fixed inset-0 backdrop-filter backdrop-blur-sm bg-white bg-opacity-40"
        />

        <div className="relative bg-white rounded-lg overflow-hidden max-w-7xl mx-auto flex">
          <div className="w-2/3">
            <img
              className="w-full"
              src="https://source.unsplash.com/random/600x600"
            />
          </div>
          <div className="p-4 w-1/3">
            <Dialog.Title>Deactivate account</Dialog.Title>
            <Dialog.Description>
              This will permanently deactivate your account
            </Dialog.Description>
          </div>
        </div>
      </div>
    </Dialog>
  );
}
