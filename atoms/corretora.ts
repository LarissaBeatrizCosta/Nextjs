import { atom } from 'jotai';

import { getCorretoras } from '@/services/corretoras';

/** Átomos para gerenciar o estado das corretoras. */

/** Busca de corretoras pelo texto digitado pelo usuário na busca pelo nome comercial. */
export const buscaNomeComercialAtom = atom<string>('');

/** Lista de corretoras. */
export const corretorasListaAtom = atom(async () => getCorretoras());

/** Lista de corretoras filtradas pelo nome comercial. */
export const corretorasFiltradasAtom = atom(async (get) => {
  const corretorasLista = await get(corretorasListaAtom);
  const nomeComercialBusca = get(buscaNomeComercialAtom).toUpperCase().trim();

  if (!nomeComercialBusca) {
    return corretorasLista;
  }

  return corretorasLista.filter(
    (item) =>
      item.nome_comercial?.toUpperCase().includes(nomeComercialBusca) ?? false,
  );
});
