import { UseFormRegister } from "react-hook-form";

type props = {
    label: string;
    options: Array<any>
    name: string
    register: UseFormRegister<any>;
    error: string | any
}


export const SelectList = ({label, options,name, register,error}:props) => {
    return(
        <div className="flex flex-col w-full">
            <label htmlFor="">{label}</label>
            <select 
                {...register(name)} 
                className="outline-none h-10 bg-transparent border border-BorderColor p-2 rounded-md text-white" 
                id={name}
                >
                {/* <option value=''></option> */}
                {
                    options.map((item,index)=>{
                        return(
                            <option key={index} className="text-black" value={item}>{item}</option>
                        )
                    })
                }
            </select>
            {
                error &&
                <p className="text-red-600">{error}</p>
            }
        </div>
    )
}