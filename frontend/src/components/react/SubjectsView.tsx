import { useState } from 'react';
import { normalizeText } from '@/lib/normalizeText';
import { INITIAL_FILTERS } from '@/constants/Filter';
import type { Filter } from '@/types/filter';

import ListOfSubjects from './ListOfSubjects';
import FilterBar from './FilterBar';
import { MATERIAS_SISTEMAS } from '@/data/materias';

function SubjectsView() {
  const [filters, setFilters] = useState<Filter>(INITIAL_FILTERS);

  const filteredSubjects = MATERIAS_SISTEMAS.filter((s) =>
    normalizeText(s.title).includes(normalizeText(filters.search))
  )
    .filter((s) => (filters.year == 0 ? true : s.year === filters.year))
    .filter((s) => (filters.quadmester == 0 ? true : s.quadmester === filters.quadmester))
    .sort((a, b) => a.title.localeCompare(b.title));

  return (
    <>
      <FilterBar setFilters={setFilters} filters={filters} />
      <ListOfSubjects subjects={filteredSubjects} setFilters={setFilters} />
    </>
  );
}

export default SubjectsView;
