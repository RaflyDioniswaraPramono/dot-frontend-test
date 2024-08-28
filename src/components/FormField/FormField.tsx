import { IFormFields } from "@/interfaces/components.interface";
import { Field } from "formik";

const FormField: React.FC<IFormFields> = (props) => {
  const {name, type, ...restProps } = props;

  return (    
    <div className="relative">
      <Field
        required
        autoComplete="off"
        type={type}
        name={name}
        id={`floating-${props.name}-label`}
        className="block px-2.5 pb-2.5 pt-3.5 w-full text-sm text-gray-900 rounded-lg border border-gray-500 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
        placeholder=" "
        {...restProps}
      />
      <label
        htmlFor={`floating-${props.name}-label`}
        className="absolute text-sm text-zinc-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
        {props.label}
      </label>
    </div>
  );
};

export default FormField;
