import IconDownload from '@/assets/icons/react/IconDownload';

const UploadHeader = () => (
  <div className='text-center mb-12'>
    <div className='inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#FFDD00] to-[#FFCC00] rounded-2xl mb-6'>
      <IconDownload size={32} className='fill-accent-foreground' />
    </div>
    <h1 className='text-4xl lg:text-5xl font-bold text-foreground mb-4'>
      Subí tu aporte y <span className='text-primary'>ayudá</span> a otros estudiantes
    </h1>
    <p className=' text-foreground-secondary max-w-2xl mx-auto'>
      Resúmenes, parciales y finales organizados por materia. Tu contribución hace la diferencia en
      la comunidad académica.
    </p>
  </div>
);

export default UploadHeader;
