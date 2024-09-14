import { useForm, SubmitHandler } from "react-hook-form"
import { Input } from "./input";
import { SelectList } from "./select-list";
import { Button } from "./button";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchemaLivro, FormValuesLivro } from "../schemas/livro";
import { useEffect } from "react";



type props = {
    id?:number
}

export const FormLivro = ({id}:props) => {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        reset
      } = useForm<FormValuesLivro>({
        resolver: zodResolver(formSchemaLivro)
    })
    
    const onSubmit: SubmitHandler<FormValuesLivro > = (data) => {
        console.log(data)
    }

    useEffect(()=>{
        reset({
            nome: 'string',
            autor: 'string',
            edicao: 'string',
            codigoDeBarras: 'string',
            dataLancamento: 'string',
            local:'string'
        })
    },[])


    return (
        <form onSubmit={handleSubmit(onSubmit)} className="w-full p-2 flex flex-col gap-2">
            <div className="flex gap-2">
                <div className="flex-1">
                    <Input
                        label="Nome"
                        type="text"
                        register={register}
                        name="nome"
                        error={errors.nome?.message}
                    />
                </div>
                <div className="w-2/6">
                    <Input
                        label="Edição"
                        type="text"
                        register={register}
                        name="edicao"
                        error={errors.edicao?.message}
                    />
                </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-2">
                <div className="flex-1">
                    <Input
                        label="Autor"
                        type="text"
                        register={register}
                        name="autor"
                        error={errors.autor?.message}
                    />
                </div>
                <div className="flex-1">
                    <Input
                        label="Codigo de barras"
                        type="text"
                        register={register}
                        name="codigoDeBarras"
                        error={errors.codigoDeBarras?.message}
                    />
                </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-2">
                <div className="flex-1">
                    <Input
                        label="Data Lançamento"
                        type="date"
                        register={register}
                        name="dataLancamento"
                        error={errors.dataLancamento?.message}
                    />
                </div>

                <div className="flex-1">
                    <SelectList
                        register={register}
                        name="local"
                        label="Local"
                        options={['Curitiba']}
                        error={errors.local?.message}
                    />
                </div>
            </div>


            <div className="flex gap-2">
                {
                    id &&
                    <>
                        <Button
                            onClick={() => alert('oi')}
                            text="Remover"
                            type="submit"
                            color="bg-red-700"
        
                        />
                        <Button
                            onClick={() => alert('oi')}
                            text="Salvar"
                            type="submit"
                            color="bg-green-700"
        
                        />
                    </>
                }
                {
                    !id &&
                    <Button
                        text="Adicionar"
                        type="submit"
                        color="bg-green-700"
    
                    />

                }
            </div>
        </form>

    )
}