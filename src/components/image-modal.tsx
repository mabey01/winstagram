import { Dialog } from "@headlessui/react";

interface ImageModalProps {
  isOpen: boolean;
  image: React.ReactNode;
  onClose: () => void;
}

export function ImageModal({ image, isOpen, onClose }: ImageModalProps) {
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

        <div className="p-4">
          <div className="relative bg-white rounded-lg overflow-hidden max-w-7xl mx-auto flex">
            <div className="w-2/3">{image}</div>
            <div className="p-4 w-1/3">
              <Dialog.Title className="font-semibold">Image</Dialog.Title>
              <div className="mt-2">
                Interesting image description would be right here.
              </div>
            </div>
          </div>
        </div>
      </div>
    </Dialog>
  );
}
