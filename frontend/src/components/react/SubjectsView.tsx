import { useState } from 'react';
import { DATABASE } from '@/data/database';
import { normalizeText } from '@/lib/normalizeText';
import { INITIAL_FILTERS } from '@/constants/Filter';
import type { Filter } from '@/types/filter';

import ListOfSubjects from './ListOfSubjects';
import FilterBar from './FilterBar';

function SubjectsView() {
  const [filters, setFilters] = useState<Filter>(INITIAL_FILTERS);

  const allSubjects = DATABASE.careers[0].subjects;

  const filteredSubjects = allSubjects
    .filter((s) => normalizeText(s.title).includes(normalizeText(filters.search)))
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
