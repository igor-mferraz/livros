import { z } from "zod";

const isoDateRegex = /^\d{4}-\d{2}-\d{2}$/;

export const formSchemaLivro = z.object({
    nome: z.string().min(2, "Nome é obrigatório"),
    edicao: z.string().min(1, "Edição é obrigatória"),
    autor: z.string().min(1, "Autor é obrigatório"),
    codigoDeBarras: z.string().min(1, "Código de barras é obrigatório"),
    dataLancamento: z.string().refine(value => !value || isoDateRegex.test(value), {
        message: "Data de lançamento inválida. Use o formato YYYY-MM-DD.",
    }),
    local: z.string().min(1, "Local é obrigatório")
});

export type FormValuesLivro = z.infer<typeof formSchemaLivro>;
