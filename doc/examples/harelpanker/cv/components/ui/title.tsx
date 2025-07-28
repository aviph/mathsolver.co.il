import React from 'react';
import { cn } from '@/lib/utils';

type HeadingProps = { level?: 1 | 2 | 3 | 4 | 5 | 6 } & React.ComponentPropsWithoutRef<
	'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
>;

export function Title({ className, level = 2, ...props }: HeadingProps) {
	const Element: `h${typeof level}` = `h${level}`;

	return <Element {...props} className={cn('text-balance font-medium ~text-3xl/5xl', className)} />;
}
