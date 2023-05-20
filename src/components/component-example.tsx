interface ComponentExampleProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
}

export function ComponentExample({
  children,
  ...props
}: ComponentExampleProps) {
  return (
    <div className='group relative my-4 flex flex-col space-y-2' {...props}>
      {children}
    </div>
  );
}
