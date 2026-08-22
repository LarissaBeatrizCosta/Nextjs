import { atom } from "jotai";
import { getCorretoras } from "@/services/corretoras";

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
