import IconOpenBook from '@/assets/icons/react/IconOpenBook';
import IconPaper from '@/assets/icons/react/IconPaper';
import IconUniversity from '@/assets/icons/react/IconUniversity';

type Props = {
  id: string;
  title: string;
  url: string;
  quadmester: number;
  year: number;
};

export default function Card({ id, title, url, quadmester, year }: Props) {
  return (
    <article className='group rounded-xl bg-gradient-to-br from-zinc-900/90 to-zinc-950/95 border border-border/60 overflow-hidden hover:border-zinc-700/80 transition-all duration-300 hover:shadow-2xl hover:shadow-black/20 flex flex-col '>
      {/* Header */}
      <div className='relative flex-1 flex flex-col bg-gradient-to-br from-zinc-800/40 to-zinc-900/60 px-6 py-8 border-b border-zinc-800/50 flex-grow'>
        {' '}
        {/* Added flex-grow here */}
        <div className='absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-yellow-500/5 to-transparent rounded-full blur-3xl' />
        <div className='relative z-10'>
          <h2 className='text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-yellow-100 transition-colors'>
            {title}
          </h2>
          <h3 className='text-zinc-400 font-medium text-lg'>Ingeniería en Sistemas</h3>
        </div>
      </div>
      {/* Content */}
      <div className='flex flex-col items-start gap-6 p-6 flex-shrink-0'>
        {' '}
        {/* Added flex-shrink-0 here */}
        {/* Info row */}
        <div className='flex w-full justify-between items-center'>
          <div className='text-zinc-400 flex items-center gap-2 bg-zinc-800/50 px-3 py-2 rounded-lg border border-zinc-700/50'>
            <svg className='h-4 w-4 text-yellow-400' viewBox='0 0 24 24'>
              <path
                fill='currentColor'
                d='M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18m11-9c0 6.075-4.925 11-11 11S1 18.075 1 12S5.925 1 12 1s11 4.925 11 11m-8 4.414l-4-4V5.5h2v6.086L16.414 15z'
              />
            </svg>
            <span className='text-zinc-200 font-medium'>{quadmester}º Cuatrimestre</span>
          </div>

          <div className='bg-gradient-to-r from-yellow-500/15 to-yellow-600/15 border border-yellow-500/30 text-yellow-200 font-semibold px-4 py-2 rounded-full'>
            {year}º año
          </div>
        </div>
        {/* Recursos */}
        <div className='w-full'>
          <h4 className='font-bold text-white text-lg mb-4 flex items-center gap-2'>
            <div className='w-2 h-2 bg-yellow-400 rounded-full' />
            Recursos disponibles:
          </h4>

          <div className='grid grid-cols-3 gap-3 w-full'>
            {/* Resúmenes */}
            <button className='group/resource hover:scale-105 active:scale-95 grayscale-50 cursor-pointer aspect-square bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 border-2 border-emerald-500/40 hover:border-emerald-400/60 text-emerald-200 hover:text-emerald-100 font-semibold rounded-xl flex items-center justify-center flex-col gap-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-400/50 focus:ring-offset-2 focus:ring-offset-zinc-900'>
              <IconOpenBook className='fill-[currentColor]' />
              <span className='text-sm group-hover/resource:font-bold transition-all'>
                Resúmenes
              </span>
            </button>

            {/* Parciales */}
            <button className='group/resource hover:scale-105 active:scale-95 grayscale-50 cursor-pointer aspect-square bg-gradient-to-br from-blue-500/20 to-blue-600/10 border-2 border-blue-500/40 hover:border-blue-400/60 text-blue-200 hover:text-blue-100 font-semibold rounded-xl flex items-center justify-center flex-col gap-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:ring-offset-2 focus:ring-offset-zinc-900'>
              <IconPaper className='fill-[currentColor]' />

              <span className='text-sm group-hover/resource:font-bold transition-all'>
                Parciales
              </span>
            </button>

            {/* Finales */}
            <button className='group/resource hover:scale-105 active:scale-95 grayscale-50 cursor-pointer aspect-square bg-gradient-to-br from-purple-500/20 to-purple-600/10 border-2 border-purple-500/40 hover:border-purple-400/60 text-purple-200 hover:text-purple-100 font-semibold rounded-xl flex items-center justify-center flex-col gap-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-400/50 focus:ring-offset-2 focus:ring-offset-zinc-900'>
              <IconUniversity className='fill-[currentColor]' />

              <span className='text-sm group-hover/resource:font-bold transition-all'>Finales</span>
            </button>
          </div>
        </div>
        {/* CTA */}
        <a
          href={`./${id}`}
          className='group/cta mt-2 w-full text-center rounded-xl bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-300 hover:to-yellow-400 px-6 py-4 font-bold text-black transition-all duration-300 hover:shadow-yellow-500/30 hover:scale-[1.02] active:scale-[0.98]'
        >
          <span className='flex items-center justify-center gap-2'>
            Ver Recursos
            <svg
              className='w-4 h-4 group-hover/cta:translate-x-1 transition-transform'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='m9 18 6-6-6-6'
              />
            </svg>
          </span>
        </a>
      </div>
    </article>
  );
}
