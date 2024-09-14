import { UseFormRegister  } from "react-hook-form";


type props = {
    label: string;
    type: "text" | "number" | "date"
    name: string
    register: UseFormRegister<any>;
    error?: string | any;

}


export const Input = ({label, type,name, register, error}:props) => {
    return(
        <div className="flex flex-col w-full">
            <label className="" htmlFor="">{label}</label>
            <input {...register(name)} className="bg-transparent border border-BorderColor outline-none text-white rounded-md p-2 h-10" type={type} />
            {
                error &&
                <p className="text-red-600">{error}</p>
            }
        </div>
    )
}