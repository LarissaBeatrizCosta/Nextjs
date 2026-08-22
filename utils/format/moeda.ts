/** Função para formatar um valor monetário em reais (BRL). */
export function formatarValorMoeda(value: number): string {
  return value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
}
