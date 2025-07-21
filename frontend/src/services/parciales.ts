import type { ResourceFetch } from '@/types/resource';
import { fetchSheet } from '@/utils/fetchSheet';

const PARCIALES_URL =
  'https://api.sheetbest.com/sheets/3d0c0214-b6f2-4280-9cc7-efe76b0a68a2/tabs/Parciales';

export async function getAllParciales() {
  return fetchSheet(PARCIALES_URL);
}

export async function getByIdParciales(id: string) {
  const url = `${PARCIALES_URL}/idMateria/${id}`;
  return fetchSheet<ResourceFetch>(url);
}
