import { api } from "@/lib/api_brasil";
import { Corretora } from "@/types/corretora";
export async function getCorretoras(): Promise<Corretora[]> {
  try {
    const { data } = await api.get<Corretora[]>("");

    const corretorasLista = Array.from(
      new Map(data.map((item) => [item.cnpj, item])).values(),
    );

    return corretorasLista;
  } catch (error) {
    throw new Error("Erro ao buscar lista de corretoras: " + error);
  }
}

export async function getCorretoraByCnpj(cnpj: string): Promise<Corretora> {
  try {
    const { data } = await api.get<Corretora>(`/${cnpj}`);
    return data;
  } catch (error) {
    throw new Error(
      "Corretora não encontrada com o CNPJ: " + cnpj + " - " + error,
    );
  }
}
