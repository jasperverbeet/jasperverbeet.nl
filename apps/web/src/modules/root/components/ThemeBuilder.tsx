"use client";

import Typography from "@/modules/ui/components/Typography/Typography";
import * as Dialog from "@radix-ui/react-dialog";

const ThemeBuilderModal = ({ children, ...props }: React.PropsWithChildren<Dialog.DialogProps>) => {
  return (
    <Dialog.Root {...props}>
      {children}
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/25 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <Dialog.Content className="fixed rounded-lg border border-border-primary border-b-2 max-w-prose container w-[calc(100%_-_2rem)] left-1/2 top-1/3 transform -translate-x-1/2 -translate-y-1/3 bg-surface-secondary p-4 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] space-y-4">
          <Dialog.DialogTitle asChild>
            <Typography asChild variant="headingSm">
              <h1>Theme</h1>
            </Typography>
          </Dialog.DialogTitle>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default ThemeBuilderModal;
