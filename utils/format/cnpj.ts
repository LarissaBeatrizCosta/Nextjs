import { CNPJ } from "cnpj-universal";
export function validarCNPJ(cnpj: string): boolean {
  return CNPJ.isValid(cnpj);
}

export function formatarCNPJ(cnpj: string): string {
  return CNPJ.formatar(cnpj);
}
