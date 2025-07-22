import { useEffect, useState } from 'react';
import { getByIdResources } from '@/services/resource';
import type { StringResource } from '@/types/resource';

export const useResources = (id: string, type: StringResource) => {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!id) {
      setError('ID no proporcionado');
      setData(null);
      return;
    }

    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const { data, error } = await getByIdResources(id, type);

        if (error) {
          setError(error);
          setData(null);
        } else {
          setData(data);
        }
      } catch (err) {
        setError(error);
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return { data, error, loading };
};
