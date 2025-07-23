import ListOfSubjects from './ListOfSubjects';
import FilterBar from './FilterBar';
import { useSubjects } from '@/hooks/useSubjects';

function SubjectsView() {
  const { filters, setFilters, filteredSubjects, loading } = useSubjects();

  return (
    <>
      <FilterBar setFilters={setFilters} filters={filters} />
      <ListOfSubjects subjects={filteredSubjects} setFilters={setFilters} loading={loading} />
    </>
  );
}

export default SubjectsView;
