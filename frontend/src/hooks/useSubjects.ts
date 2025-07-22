import { INITIAL_FILTERS } from '@/constants/Filter';
import { MATERIAS_SISTEMAS } from '@/data/materias';
import { normalizeText } from '@/lib/normalizeText';
import type { Filter } from '@/types/filter';
import { useState } from 'react';

export const useSubjects = () => {
  const [filters, setFilters] = useState<Filter>(INITIAL_FILTERS);

  const filteredSubjects = MATERIAS_SISTEMAS.filter((s) =>
    normalizeText(s.title).includes(normalizeText(filters.search))
  )
    .filter((s) => (filters.year == 0 ? true : s.year === filters.year))
    .filter((s) => (filters.quadmester == 0 ? true : s.quadmester === filters.quadmester))
    .sort((a, b) => a.title.localeCompare(b.title));

  return {
    filters,
    setFilters,
    filteredSubjects,
  };
};
