import React from 'react';
import { cn } from '@/lib/utils';

type Props = React.ComponentPropsWithoutRef<'section'> & {
	children: React.ReactNode;
};

export default function Section({ children, className, ...props }: Props) {
	return (
		<section className={cn('relative z-20 ~px-5/12', className)} {...props}>
			{children}
		</section>
	);
}
