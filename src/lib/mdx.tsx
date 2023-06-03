'use client';

import { useMDXComponent } from 'next-contentlayer/hooks';

import { ComponentExample } from '@/components/component-example';
import { examples } from '@/components/examples';

interface MdxProps {
  code: string;
}

const components = {
  ComponentExample,
  ...examples,
};

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  return (
    <article className='prose prose-quoteless prose-neutral dark:prose-invert'>
      <Component components={{ ...components }} />
    </article>
  );
}
