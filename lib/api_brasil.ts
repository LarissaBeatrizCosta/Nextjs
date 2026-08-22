import axios from 'axios';

/** Instância do Axios (baseURL da Brasil API)*/
const baseURL =
  process.env.NEXT_PUBLIC_API_URL ??
  'https://brasilapi.com.br/api/cvm/corretoras/v1';

export const api = axios.create({
  baseURL,
  timeout: 5000,
});
