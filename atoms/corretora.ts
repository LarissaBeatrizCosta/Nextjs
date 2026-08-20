import { atom } from "jotai";
import { getCorretoras } from "@/services/corretoras";
import { Corretora } from "@/types/corretora";
import { unwrap } from "jotai/utils";

export const buscaNomeComercialAtom = atom<string>("");

export const corretorasListaAtom = atom(async () => {
  return await getCorretoras();
});

export const corretorasFiltradasAtom = atom(async (get) => {
  const corretorasLista = await get(corretorasListaAtom);
  const nomeComercialBusca = get(buscaNomeComercialAtom).toUpperCase().trim();

  if (!nomeComercialBusca) return corretorasLista;

  return corretorasLista.filter(
    (item) =>
      item.nome_comercial?.toUpperCase().includes(nomeComercialBusca) ?? false,
  );
});

export const loadBuscaAtom = unwrap(
  corretorasFiltradasAtom,
  (prev) => prev ?? [],
);

export const corretoraSelecionadaAtom = atom<Corretora | null>(null);

export const loadCorretoraAtom = unwrap(
  corretoraSelecionadaAtom,
  (prev) => prev ?? null,
);

