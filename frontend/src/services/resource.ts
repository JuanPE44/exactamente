import type { ResourceFetch, StringResource } from '@/types/resource';
import { fetchSheet } from '@/utils/fetchSheet';

const RESOURCE_URL = 'https://api.sheetbest.com/sheets/3d0c0214-b6f2-4280-9cc7-efe76b0a68a2/tabs';

export async function getAllResources(type: StringResource) {
  const url = `${RESOURCE_URL}/${type}`;
  return fetchSheet(url);
}

export async function getByIdResources(id: string, type: StringResource) {
  const url = `${RESOURCE_URL}/${type}/idMateria/${id}`;
  return fetchSheet<ResourceFetch>(url);
}
