import type { Subject, TipoMateria } from './subjects';

export interface MateriaMapeada extends Subject {
  type: TipoMateria;
}

export type PlanEstudiosMapeado = {
  [year: number]: {
    [quadmester: number]: MateriaMapeada[];
  };
};
