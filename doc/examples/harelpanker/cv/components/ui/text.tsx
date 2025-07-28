import React from 'react';
import { cn } from '@/lib/utils';

type TextProps = { element?: 'span' | 'p' } & React.ComponentPropsWithoutRef<'span' | 'p'>;

export function Text({ className, element = 'p', ...props }: TextProps) {
	const Element: typeof element = element;

	return <Element {...props} className={cn('text-pretty !leading-normal ~text-lg/2xl', className)} />;
}
