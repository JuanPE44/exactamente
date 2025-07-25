interface Props {
  size?: number;
  className?: string;
}

const IconDocument: React.FC<Props> = ({ size = 30, className = 'fill-foreground' }) => {
  return (
    <svg width={size} height={size} viewBox='0 0 24 24'>
      <path
        className={className}
        d='M4 4a2 2 0 0 1 2-2h8a1 1 0 0 1 .707.293l5 5A1 1 0 0 1 20 8v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm13.586 4L14 4.414V8zM12 4H6v16h12V10h-5a1 1 0 0 1-1-1zm-4 9a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1m0 4a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1'
      />
    </svg>
  );
};

export default IconDocument;
