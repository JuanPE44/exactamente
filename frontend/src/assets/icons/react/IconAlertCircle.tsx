interface Props {
  size?: number;
  className?: string;
}

const IconAlertCircle: React.FC<Props> = ({ size = 30, className = 'fill-foreground' }) => {
  return (
    <svg width={30} height={30} viewBox='0 0 24 24' className={className}>
      <path d='M11 15h2v2h-2zm0-8h2v6h-2zm1-5C6.47 2 2 6.5 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m0 18a8 8 0 0 1-8-8a8 8 0 0 1 8-8a8 8 0 0 1 8 8a8 8 0 0 1-8 8' />
    </svg>
  );
};

export default IconAlertCircle;
