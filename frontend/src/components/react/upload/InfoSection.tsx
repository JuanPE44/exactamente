const InfoSection = () => (
  <div className='mt-12 bg-blue-900/20 border border-blue-500/30 rounded-xl p-6'>
    <h3 className='text-lg font-bold text-foreground-secondary mb-3'>Información importante</h3>
    <ul className='space-y-2 text-sm text-blue-200'>
      <li className='flex items-start'>
        <div className='w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0'></div>
        <span>Los aportes serán revisados antes de ser publicados</span>
      </li>
      <li className='flex items-start'>
        <div className='w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0'></div>
        <span>Solo se aceptan archivos PDF, JPG y PNG de hasta 10MB</span>
      </li>
      <li className='flex items-start'>
        <div className='w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0'></div>
        <span>Asegurate de que el contenido sea original o tengas permisos para compartirlo</span>
      </li>
    </ul>
  </div>
);

export default InfoSection;
