import { IconType } from "react-icons/lib";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ShadCn/dialog";

interface Props {
  children: React.ReactNode;
  _ModalTrigger: React.ReactNode;
  _ModalTitle: React.ReactNode;
  _ModalHeader?: React.ReactNode;
}

export const Modal = ({
  children,
  _ModalTrigger,
  _ModalTitle,
  _ModalHeader,
  ...props
}: Props) => {
  return (
    <Dialog>
      <DialogTrigger className="">{_ModalTrigger}</DialogTrigger>
      <DialogContent className="flex flex-col justify-center bg-custom-containerColor text-custom-fontColor dark:border-0">
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
