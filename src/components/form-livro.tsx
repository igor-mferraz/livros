import { useForm, SubmitHandler } from "react-hook-form"
import { Input } from "./input";
import { Button } from "./button";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchemaLivro, FormValuesLivro } from "../schemas/livro";
import { useEffect, useState } from "react";
import { createLivro, deleteLivro, getLivrosById, updateLivro } from "../api/livro";
import { tranformDate } from "../util/tranformDate";
import { Loading } from "./loading";

type props = {
    id?: number | null;
    onClose: () => void;
    refresh: () => void;
    toast: any;
    setLoading: any
}

export const FormLivro = ({ id, onClose, refresh, toast, setLoading}: props) => {
    
    const [getLoading, setGetLoading] = useState(false)

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<FormValuesLivro>({
        resolver: zodResolver(formSchemaLivro)
    })

    const onSubmit: SubmitHandler<FormValuesLivro> = async (data) => {
        try {
            setLoading(true)
            if (!id) {
                await createLivro(data);
                toast.success("Livro Adicionado!",{
                    theme: 'dark'
                   })
                
            }
            if (id) {
               const result = await updateLivro(id, data);
               console.log(result)
               toast.success("Livro Atualizado!",{
                theme: 'dark'
               })
               
            }
            onClose();
            refresh();
            
        } catch (error:any) {
            alert('Ocorreu um erro!')
            toast.error(error.response.data.message[0],{
                theme: 'dark'
               })
          }
          finally{
            setLoading(false)
          }
    }

    const handleDelete = async () =>{
        try {
            setLoading(true)
            await deleteLivro(id as number);
            onClose();
            refresh();
            toast.success("Livro Deletado!",{
                theme: 'dark'
               })
               setLoading(false)
        } catch (error) {
            alert('Ocorreu um erro!')
            toast.error("Erro!",{
                theme: 'dark'
               })
        }
        finally{
            setLoading(false)
        }
    }

    const fetch = async () => {
        try {
            setGetLoading(true)
            const { data } = await getLivrosById(id as number);
            reset({
                nomeLivro: data.nomeLivro,
                autor: data.autor,
                numeroEdicao: (data.numeroEdicao).toString(),
                codigoBarras: data.codigoBarras,
                dataLancamento: tranformDate(data.dataLancamento),
                localLancamento: data.localLancamento
            })
            setGetLoading(false)
        } catch (err) {
            setGetLoading(false)
        }
    }

    useEffect(() => {
        if (id) {
            fetch();
        }
    }, [])

    if(getLoading) return <Loading/>


    return (
                <form onSubmit={handleSubmit(onSubmit)} className="w-full p-2 flex flex-col gap-2">
                    <div className="flex gap-2">
                        <div className="flex-1">
                            <Input
                                label="Livro"
                                type="text"
                                register={register}
                                name="nomeLivro"
                                error={errors.nomeLivro?.message}
                            />
                        </div>
                        <div className="w-2/6">
                            <Input
                                label="Edição"
                                type="text"
                                register={register}
                                name="numeroEdicao"
                                error={errors.numeroEdicao?.message}
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
                                name="codigoBarras"
                                error={errors.codigoBarras?.message}
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
                            <Input
                                register={register}
                                type="text"
                                name="localLancamento"
                                label="Local de Lançamento"
                                error={errors.localLancamento?.message}
                            />
                        </div>
                    </div>


                    <div className="flex gap-2">
                        {id ? (
                            <>
                                <Button
                                    onClick={handleDelete}
                                    text="Remover"
                                    type="button"
                                    color="bg-red-700"
                                />
                                <Button
                                    text="Salvar"
                                    type="submit"
                                    color="bg-green-700"
                                />
                            </>
                        ) : (
                            <Button
                                text="Adicionar"
                                type="submit"
                                color="bg-green-700"
                            />
                        )}
                    </div>
                </form>


    )
}