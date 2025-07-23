import { MATERIAS_SISTEMAS } from '@/data/materias';
import React, { useState } from 'react';

interface Props {
  initialSelectedMateria: string;
  clickeable: boolean;
  title: string;
}

const CorrelativesComponent = ({ initialSelectedMateria, clickeable, title }: Props) => {
  const [selectedMateriaId, setSelectedMateriaId] = useState(initialSelectedMateria);

  // Constantes de configuración
  const AÑOS_CARRERA = 5;
  const CUATRIMESTRES_POR_AÑO = 2;

  // Tipos de materias
  const TIPOS_MATERIA = {
    CURSADA: 'cursada',
    CORRELATIVA: 'correlativa',
    ACTUAL: 'actual',
    DISPONIBLE: 'disponible',
  };

  // Obtener la materia actual seleccionada
  const materiaActual = MATERIAS_SISTEMAS.find((subject) => subject.id === selectedMateriaId);

  if (!materiaActual) {
    return <div>Materia no encontrada</div>;
  }

  // Obtener correlativas (materias que requieren la actual)
  const correlatives = MATERIAS_SISTEMAS.filter((materia) =>
    materia.required.includes(selectedMateriaId)
  ).map((materia) => materia.id);

  // Mapear el plan de estudios
  const PLAN_ESTUDIOS_MAPEADO = {};

  MATERIAS_SISTEMAS.forEach((subject) => {
    const year = subject.year;
    const quadmester = subject.quadmester;

    if (!PLAN_ESTUDIOS_MAPEADO[year]) {
      PLAN_ESTUDIOS_MAPEADO[year] = {};
    }
    if (!PLAN_ESTUDIOS_MAPEADO[year][quadmester]) {
      PLAN_ESTUDIOS_MAPEADO[year][quadmester] = [];
    }

    let type = TIPOS_MATERIA.DISPONIBLE;

    if (subject.id === selectedMateriaId) {
      type = TIPOS_MATERIA.ACTUAL;
    } else if (materiaActual.required.includes(subject.id)) {
      type = TIPOS_MATERIA.CURSADA;
    } else if (correlatives.includes(subject.id)) {
      type = TIPOS_MATERIA.CORRELATIVA;
    }

    PLAN_ESTUDIOS_MAPEADO[year][quadmester].push({
      ...subject,
      type: type,
    });
  });

  // Función para obtener estilos según el tipo de materia
  const getEstiloMateria = (tipo) => {
    switch (tipo) {
      case TIPOS_MATERIA.CURSADA:
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

  const handleMateriaClick = (materiaId) => {
    setSelectedMateriaId(materiaId);
  };

  return (
    <div className=' text-white' id='correlatives'>
      <div className='max-w-7xl mx-auto'>
        <div className='rounded-xl mt-10 lg:mt-20'>
          <div className='mb-12'>
            <h2 className='text-3xl font-bold text-white mb-4'>{title}</h2>
            <p className='text-gray-300 mb-8'>
              Diagrama completo de la carrera mostrando las correlativas de{' '}
              <span className='text-yellow-400 font-semibold'>{materiaActual.title}</span>
            </p>

            {/* Leyenda */}
            <div className='flex flex-wrap gap-6 p-6 bg-gray-900/50 rounded-2xl border border-gray-800'>
              <div className='flex items-center gap-2'>
                <div className='w-4 h-4 bg-gradient-to-br from-orange-500/20 to-orange-600/10 border border-orange-500/40 rounded'></div>
                <span className='text-gray-300 text-sm'>
                  Requiere para cursar la materia seleccionada
                </span>
              </div>
              <div className='flex items-center gap-2'>
                <div className='w-4 h-4 bg-gradient-to-br from-red-500/20 to-red-600/10 border border-red-500/40 rounded'></div>
                <span className='text-gray-300 text-sm'>
                  La materia seleccionada es correlativa de esta
                </span>
              </div>
              <div className='flex items-center gap-2'>
                <div className='w-4 h-4 bg-gradient-to-br from-yellow-500/30 to-yellow-600/20 border border-yellow-500/60 rounded'></div>
                <span className='text-gray-300 text-sm'>Materia seleccionada</span>
              </div>
              <div className='flex items-center gap-2'>
                <div className='w-4 h-4 bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded'></div>
                <span className='text-gray-300 text-sm'>Otras materias</span>
              </div>
            </div>
          </div>

          <div className='space-y-12'>
            {Array.from({ length: AÑOS_CARRERA }, (_, añoIndex) => {
              const año = añoIndex + 1;
              return (
                <div key={año} className='space-y-6'>
                  <div className='flex items-center gap-3'>
                    <div className='bg-gradient-to-r from-yellow-500/80 to-yellow-600/80 text-black px-4 py-2 rounded-xl font-bold text-lg shadow-lg'>
                      {año}° Año
                    </div>
                    <div className='h-px bg-gradient-to-r from-yellow-500/50 to-transparent flex-1' />
                  </div>

                  <div className='space-y-8'>
                    {Array.from({ length: CUATRIMESTRES_POR_AÑO }, (_, cuatrimestreIndex) => {
                      const cuatrimestre = cuatrimestreIndex + 1;
                      const materias = PLAN_ESTUDIOS_MAPEADO[año]?.[cuatrimestre] || [];

                      return (
                        <div key={cuatrimestre} className='space-y-4'>
                          <h4 className='text-gray-400 font-semibold text-lg'>
                            {cuatrimestre}° Cuatrimestre
                          </h4>

                          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                            {materias.map((materia) => {
                              const estilos = getEstiloMateria(materia.type);
                              return (
                                <div
                                  key={materia.id}
                                  className={`${estilos.bg} ${estilos.border} ${
                                    clickeable
                                      ? 'transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer'
                                      : 'pointer-events-none'
                                  } border-2 rounded-xl p-4 `}
                                  onClick={() => handleMateriaClick(materia.id)}
                                >
                                  <div className='flex items-start justify-between mb-3'>
                                    <h5 className={`font-semibold ${estilos.text} leading-tight`}>
                                      {materia.title}
                                    </h5>
                                  </div>

                                  {/* Indicador de materia actual */}
                                  {materia.type === TIPOS_MATERIA.ACTUAL && (
                                    <div className='mt-3 flex items-center gap-2'>
                                      <div className='w-2 h-2 bg-yellow-400 rounded-full animate-pulse' />
                                      <span className='text-xs font-semibold text-yellow-200'>
                                        Materia actual
                                      </span>
                                    </div>
                                  )}
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Información de la materia seleccionada */}
          <div className='mt-12 p-6 bg-yellow-900/20 border border-yellow-500/30 rounded-2xl'>
            <h3 className='text-yellow-400 font-bold text-lg mb-4'>Materia Seleccionada</h3>
            <div className='grid md:grid-cols-2 gap-6'>
              <div>
                <h4 className='text-yellow-300 font-semibold mb-2'>Información General</h4>
                <p className='text-gray-300 mb-2'>
                  <strong>Nombre:</strong> {materiaActual.title}
                </p>
                <p className='text-gray-300 mb-2'>
                  <strong>Año:</strong> {materiaActual.year}°
                </p>
                <p className='text-gray-300 mb-2'>
                  <strong>Cuatrimestre:</strong> {materiaActual.quadmester}°
                </p>
              </div>
              <div>
                <h4 className='text-yellow-300 font-semibold mb-2'>Correlativas</h4>
                <div className='space-y-2'>
                  <div>
                    <p className='text-orange-300 font-medium'>Requiere para cursar:</p>
                    {materiaActual.required.length > 0 ? (
                      <ul className='text-gray-300 text-sm ml-4'>
                        {materiaActual.required.map((reqId) => {
                          const reqMateria = MATERIAS_SISTEMAS.find((m) => m.id === reqId);
                          return <li key={reqId}>• {reqMateria?.title || reqId}</li>;
                        })}
                      </ul>
                    ) : (
                      <p className='text-gray-400 text-sm ml-4'>No requiere materias previas</p>
                    )}
                  </div>
                  <div>
                    <p className='text-red-300 font-medium'>Es correlativa de:</p>
                    {correlatives.length > 0 ? (
                      <ul className='text-gray-300 text-sm ml-4'>
                        {correlatives.map((corrId) => {
                          const corrMateria = MATERIAS_SISTEMAS.find((m) => m.id === corrId);
                          return <li key={corrId}>• {corrMateria?.title || corrId}</li>;
                        })}
                      </ul>
                    ) : (
                      <p className='text-gray-400 text-sm ml-4'>
                        No es correlativa de ninguna materia
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Nota explicativa */}
          <div className='mt-12 p-6 bg-blue-900/20 border border-blue-500/30 rounded-2xl'>
            <p className='text-blue-200 text-sm leading-relaxed'>
              <span className='font-semibold text-blue-100'>Nota:</span> Haz clic en cualquier
              materia para ver sus correlativas. Las materias marcadas en{' '}
              <span className='text-orange-300 font-medium'>naranja</span> son requisitos para
              cursar la materia seleccionada (
              <span className='text-yellow-400 font-semibold'>{materiaActual.title}</span>),
              mientras que las marcadas en <span className='text-red-300 font-medium'>rojo</span>{' '}
              requieren tener aprobada la materia seleccionada para ser cursadas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CorrelativesComponent;
