import { Magnetic } from '@/components/ui/magnetic';

export default function ContactButton() {
	return (
		<a
			data-umami-event='contact_info'
			href='https://cal.com/harel'
			target='_blank'
			rel='noopener noreferrer'
			className='flex w-full flex-col items-center justify-center gap-y-2 overflow-hidden rounded-md py-10'>
			<div className='relative z-20 text-center font-medium text-foreground ~text-5xl/7xl'>
				<Magnetic intensity={0.3} actionArea='global' range={250}>
					<span>Let&apos;s Meet</span>
				</Magnetic>
			</div>
			<div className='relative w-full'>
				{/* Gradients */}
				<div className='absolute inset-x-10 top-0 h-[2px] w-3/4 bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-sm lg:inset-x-20' />
				<div className='absolute inset-x-10 top-0 h-px w-3/4 bg-gradient-to-r from-transparent via-indigo-500 to-transparent lg:inset-x-20' />
				<div className='absolute inset-x-32 top-0 h-[5px] w-1/4 bg-gradient-to-r from-transparent via-sky-500 to-transparent blur-sm lg:inset-x-60' />
				<div className='absolute inset-x-32 top-0 h-px w-1/4 bg-gradient-to-r from-transparent via-sky-500 to-transparent lg:inset-x-60' />
			</div>
		</a>
	);
}
