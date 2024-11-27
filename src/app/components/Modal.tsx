import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ShadCn/dialog";

interface Props {
  children: React.ReactNode;
  className?: string;
  _ModalTrigger: React.ReactNode;
  _ModalTitle: React.ReactNode;
  _ModalHeader?: React.ReactNode;
}

export const Modal = ({
  children,
  _ModalTrigger,
  _ModalTitle,
  _ModalHeader,
  className,
  ...props
}: Props) => {
  return (
    <Dialog>
      <DialogTrigger className="">{_ModalTrigger}</DialogTrigger>
      <DialogContent
        className={cn(
          `w-[400px] rounded-md sm:w-full sm:flex sm:flex-col sm:w-full justify-center bg-custom-containerColor text-custom-fontColor dark:border-0 `,
          className
        )}
      >
        <DialogHeader>
          <DialogTitle className="text-center text-[1.4em]">
            {_ModalTitle}
          </DialogTitle>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
