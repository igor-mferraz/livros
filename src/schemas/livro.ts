import { z } from "zod";

const isoDateRegex = /^\d{4}-\d{2}-\d{2}$/;

export const formSchemaLivro = z.object({
    nomeLivro: z.string().min(2, "Nome é obrigatório"),
    numeroEdicao: z.string({message: ''}).min(1,'Campo Obrigatório').transform(val => val ? Number(val) : undefined),
    autor: z.string().min(1, "Autor é obrigatório"),
    codigoBarras: z.string().min(1, "Código de barras é obrigatório"),
    dataLancamento: z.string().min(1, "Data é obrigatório").refine(value => !value || isoDateRegex.test(value), {
        message: "Data de lançamento inválida. Use o formato DD-MM-AAAA.",
    }),
    localLancamento: z.string().min(1, "Local é obrigatório")
});

export type FormValuesLivro = z.infer<typeof formSchemaLivro>;
