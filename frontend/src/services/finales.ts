import type { ResourceFetch } from '@/types/resource';
import { fetchSheet } from '@/utils/fetchSheet';

const FINALES_URL =
  'https://api.sheetbest.com/sheets/3d0c0214-b6f2-4280-9cc7-efe76b0a68a2/tabs/Finales';

export async function getAllFinales() {
  return fetchSheet(FINALES_URL);
}

export async function getByIdFinales(id: string) {
  const url = `${FINALES_URL}/idMateria/${id}`;
  return fetchSheet<ResourceFetch>(url);
}
