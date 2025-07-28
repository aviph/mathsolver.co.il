'use client';
import { useMotionValue } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import { useMotionTemplate, motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { TextEffect } from '@/components/ui/text-effect';
import { blurSlideVariants } from '@/lib/fade-text-variants';

export const EvervaultCard = ({
	text,
	className,
	trigger,
}: {
	text?: string;
	className?: string;
	trigger: boolean;
}) => {
	const mouseX = useMotionValue(0);
	const mouseY = useMotionValue(0);

	const [randomString, setRandomString] = useState('');

	useEffect(() => {
		const str = generateRandomString(1500);
		setRandomString(str);
	}, []);

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	function onMouseMove({ currentTarget, clientX, clientY }: any) {
		const { left, top } = currentTarget.getBoundingClientRect();
		mouseX.set(clientX - left);
		mouseY.set(clientY - top);

		const str = generateRandomString(1500);
		setRandomString(str);
	}

	return (
		<div
			className={cn('relative flex aspect-video w-full items-center justify-center bg-transparent p-0.5', className)}>
			<div
				onMouseMove={onMouseMove}
				className='group/card relative flex h-full w-full items-center justify-center overflow-hidden rounded-3xl bg-transparent'>
				<CardPattern mouseX={mouseX} mouseY={mouseY} randomString={randomString} />
				<div className='relative z-10 flex items-center justify-center'>
					<div className='relative flex items-center justify-center rounded-full font-semibold text-white ~text-3xl/5xl ~h-32/56 ~w-32/56'>
						<div className='absolute h-full w-full rounded-full bg-background/90 blur-sm ' />
						<span className='pointer-events-none z-20 text-foreground'>
							<TextEffect className='inline-flex' per='char' variants={blurSlideVariants} trigger={trigger}>
								{text ? text : ''}
							</TextEffect>
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function CardPattern({ mouseX, mouseY, randomString }: any) {
	const maskImage = useMotionTemplate`radial-gradient(250px at ${mouseX}px ${mouseY}px, white, transparent)`;
	const style = { maskImage, WebkitMaskImage: maskImage };

	return (
		<div className='pointer-events-none'>
			<div className='absolute inset-0 rounded-2xl [mask-image:linear-gradient(white,transparent)] group-hover/card:opacity-50'></div>
			<motion.div
				className='absolute inset-0 rounded-2xl bg-gradient-to-r from-green-500 via-red-600 to-blue-700 opacity-0 backdrop-blur-xl transition duration-500 group-hover/card:opacity-100'
				style={style}
			/>
			<motion.div
				className='absolute inset-0 rounded-2xl opacity-0 mix-blend-overlay group-hover/card:opacity-100'
				style={style}>
				<p className='absolute inset-x-0 h-full whitespace-pre-wrap break-words font-mono text-sm font-bold text-foreground transition duration-500'>
					{randomString}
				</p>
			</motion.div>
		</div>
	);
}

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
export const generateRandomString = (length: number) => {
	let result = '';
	for (let i = 0; i < length; i++) {
		result += characters.charAt(Math.floor(Math.random() * characters.length));
	}
	return result;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Icon = ({ className, ...rest }: any) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			fill='none'
			viewBox='0 0 24 24'
			strokeWidth='1.5'
			stroke='currentColor'
			className={className}
			{...rest}>
			<path strokeLinecap='round' strokeLinejoin='round' d='M12 6v12m6-6H6' />
		</svg>
	);
};
