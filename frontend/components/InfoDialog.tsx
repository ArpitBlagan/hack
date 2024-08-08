import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const InfoDialog = ({ title, p1, p2 }: any) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="glow-on-hover">Read</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            <h1 className="text-center text-[26px] font-semibold text-gray-600 my-5">
              {title}
            </h1>
          </DialogTitle>
          <DialogDescription className="flex flex-col gap-10 text-semibold text-[20px]">
            <p>{p1}</p>
            <p>{p2}</p>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default InfoDialog;
