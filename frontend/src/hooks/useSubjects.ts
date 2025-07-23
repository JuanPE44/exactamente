import { useEffect, useState } from 'react';
import { INITIAL_FILTERS } from '@/constants/Filter';
import { MATERIAS_SISTEMAS } from '@/data/materias';
import { normalizeText } from '@/lib/normalizeText';
import type { Filter } from '@/types/filter';

export const useSubjects = () => {
  const [filters, setFilters] = useState<Filter>(INITIAL_FILTERS);
  const [filteredSubjects, setFilteredSubjects] = useState<typeof MATERIAS_SISTEMAS>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      const result = MATERIAS_SISTEMAS.filter((s) =>
        normalizeText(s.title).includes(normalizeText(filters.search))
      )
        .filter((s) => (filters.year === 0 ? true : s.year === filters.year))
        .filter((s) => (filters.quadmester === 0 ? true : s.quadmester === filters.quadmester))
        .sort((a, b) => a.title.localeCompare(b.title));

      setFilteredSubjects(result);
      setLoading(false);
    }, 500); // Simula 500ms de delay como si viniera de una API

    return () => clearTimeout(timer);
  }, [filters]);

  return {
    filters,
    setFilters,
    filteredSubjects,
    loading,
  };
};
