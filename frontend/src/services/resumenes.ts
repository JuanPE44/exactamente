import type { ResourceFetch } from '@/types/resource';
import { fetchSheet } from '@/utils/fetchSheet';

const RESUMENES_URL =
  'https://api.sheetbest.com/sheets/3d0c0214-b6f2-4280-9cc7-efe76b0a68a2/tabs/Resumenes';

export async function getAllResumenes() {
  return fetchSheet(RESUMENES_URL);
}

export async function getByIdResumenes(id: string) {
  const url = `${RESUMENES_URL}/idMateria/${id}`;
  return fetchSheet<ResourceFetch>(url);
}
