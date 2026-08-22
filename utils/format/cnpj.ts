import { CNPJ } from 'cnpj-universal';

/** Função para formatar um CNPJ. */
export function formatarCNPJ(cnpj: string): string {
  return CNPJ.formatar(cnpj);
}
