import React from 'react';
import { cn } from '@/lib/utils';

type Props = React.ComponentPropsWithoutRef<'div'> & {
	children: React.ReactNode;
};

export default function Container({ children, className, ...props }: Props) {
	return (
		<div className={cn('container relative z-20 mx-auto max-w-6xl', className)} {...props}>
			{children}
		</div>
	);
}
