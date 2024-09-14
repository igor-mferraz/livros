import { useForm, SubmitHandler } from "react-hook-form"
import { Input } from "./input";
import { SelectList } from "./select-list";
import { Button } from "./button";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchemaLivro, FormValuesLivro } from "../schemas/livro";
import { useEffect } from "react";
import { createLivro, deleteLivro, getLivrosById, updateLivro } from "../api/livro";




type props = {
    id?: number | null;
    onClose: () => void;
    actionType?: string;
    refresh: () => void;
    toast: any
}

export const FormLivro = ({ id, onClose, actionType, refresh, toast}: props) => {

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

            if (actionType === 'create') {
                await createLivro(data);
                toast.success("Livro Adicionado!",{
                    theme: 'dark'
                   })
            } else if (actionType === 'update' && id) {
               await updateLivro(id, data);
               toast.success("Livro Atualizado!",{
                theme: 'dark'
               })
            }
            onClose();
            refresh();
          } catch (error) {
            console.log(error)
            toast.error("Erro!",{
                theme: 'dark'
               })
          }
    }

    const handleDelete = async () =>{
        try {
            await deleteLivro(id as number);
            onClose();
            refresh();
            toast.success("Livro Deletado!",{
                theme: 'dark'
               })
        } catch (error) {
            toast.error("Erro!",{
                theme: 'dark'
               })
            console.error('Erro ao submeter o formulário:', error);
        }
    }

    const fetch = async () => {
        try {
            const { data } = await getLivrosById(id as number);
            console.log(data)
            reset({
                nomeLivro: data.nomeLivro,
                autor: data.autor,
                numeroEdicao: data.numeroEdicao,
                codigoBarras: data.codigoBarras,
                dataLancamento: data.dataLancamento,
                localLancamento: data.localLancamento
            })
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        if (id) {
            fetch();
        }
    }, [])


    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className="w-full p-2 flex flex-col gap-2">
                <div className="flex gap-2">
                    <div className="flex-1">
                        <Input
                            label="Nome"
                            type="text"
                            register={register}
                            name="nomeLivro"
                            error={errors.nomeLivro?.message}
                        />
                    </div>
                    <div className="w-2/6">
                        <Input
                            label="Edição"
                            type="number"
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
                        <SelectList
                            register={register}
                            name="localLancamento"
                            label="Local"
                            options={['Curitiba']}
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
        
        </>

    )
}