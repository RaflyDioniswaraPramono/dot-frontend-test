import { IContentTitleProps } from "@/interfaces/components.interface";
import { Form, Formik } from "formik";
import Image from "next/image";
import FormField from "../FormField/FormField";
import { Search } from "@mui/icons-material";

const ContentTitle = ({ title, description }: IContentTitleProps) => {
  return (
    <div className="shadow-md rounded-xl mb-4 p-4">
      <div className="flex justify-start items-center gap-3">
        <Image src="/icons/point.png" alt="Point Icon" width={24} height={24} className="" />
        <div>
          <p className="text-lg font-bold">{title}</p>
          <p className="text-sm text-zinc-500">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ContentTitle;
