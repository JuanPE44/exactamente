import { useState, useMemo } from 'react';
import { MATERIAS_SISTEMAS } from '@/data/materias';
import { TIPOS_MATERIA } from '@/constants/correlatives';
import type { PlanEstudiosMapeado } from '@/types/correlative';
import type { TipoMateria } from '@/types/subjects';

export function useCorrelatives(initialSelectedId: string) {
  const [selectedMateriaId, setSelectedMateriaId] = useState(initialSelectedId);

  const materiaActual = useMemo(
    () => MATERIAS_SISTEMAS.find((m) => m.id === selectedMateriaId),
    [selectedMateriaId]
  );

  const correlatives = useMemo(() => {
    return MATERIAS_SISTEMAS.filter((m) => m.required.includes(selectedMateriaId)).map((m) => m.id);
  }, [selectedMateriaId]);

  const PLAN_ESTUDIOS_MAPEADO: PlanEstudiosMapeado = useMemo(() => {
    const plan: PlanEstudiosMapeado = {};

    MATERIAS_SISTEMAS.forEach((subject) => {
      const year = subject.year;
      const quad = subject.quadmester;

      if (!plan[year]) plan[year] = {};
      if (!plan[year][quad]) plan[year][quad] = [];

      let type: TipoMateria = TIPOS_MATERIA.OTRA;

      if (subject.id === selectedMateriaId) {
        type = TIPOS_MATERIA.ACTUAL;
      } else if (materiaActual?.required.includes(subject.id)) {
        type = TIPOS_MATERIA.REQUERIDA;
      } else if (correlatives.includes(subject.id)) {
        type = TIPOS_MATERIA.CORRELATIVA;
      }

      plan[year][quad].push({
        ...subject,
        type,
      });
    });

    return plan;
  }, [MATERIAS_SISTEMAS, selectedMateriaId, materiaActual, correlatives]);

  const getEstiloMateria = (tipo: string) => {
    switch (tipo) {
      case TIPOS_MATERIA.REQUERIDA:
        return {
          bg: 'bg-gradient-to-br from-orange-500/20 to-orange-600/10',
          border: 'border-orange-500/40',
          text: 'text-orange-200',
          dot: 'bg-orange-400',
        };
      case TIPOS_MATERIA.CORRELATIVA:
        return {
          bg: 'bg-gradient-to-br from-red-500/20 to-red-600/10',
          border: 'border-red-500/40',
          text: 'text-red-200',
          dot: 'bg-red-400',
        };
      case TIPOS_MATERIA.ACTUAL:
        return {
          bg: 'bg-gradient-to-br from-yellow-500/30 to-yellow-600/20',
          border: 'border-yellow-500/60',
          text: 'text-yellow-100',
          dot: 'bg-yellow-400',
        };
      default:
        return {
          bg: 'bg-gradient-to-br from-gray-800/50 to-gray-900/50',
          border: 'border-gray-700/50',
          text: 'text-gray-300',
          dot: 'bg-gray-500',
        };
    }
  };

  return {
    selectedMateriaId,
    setSelectedMateriaId,
    materiaActual,
    correlatives,
    PLAN_ESTUDIOS_MAPEADO,
    getEstiloMateria,
  };
}
