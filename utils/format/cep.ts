/** Função para formatar um CEP. */
export function formatarCep(cep: string): string {
  return cep.replace(/(\d{5})(\d{1,3})/, '$1-$2');
}
