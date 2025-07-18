import { useState } from 'react';
import FilterBar, { type Filter } from './FilterBar';
import ListOfSubjects from './ListOfSubjects';
import { DATABASE } from '@/data/database';

function normalizeText(text: string) {
  return text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
}

function SubjectsView() {
  const [filters, setFilters] = useState<Filter>({
    search: '',
    quadmester: 0,
    year: 0,
    carrer: 'Ingenieria en Sistemas',
  });

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
