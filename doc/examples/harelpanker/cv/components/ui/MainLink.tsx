import Link from 'next/link';
import { Magnetic } from '@/components/ui/magnetic';

export default function MainLink({ text = 'Contact info', href = '#contact' }: { text?: string; href?: string }) {
	return (
		<Magnetic intensity={0.2} springOptions={{ bounce: 0.1 }} actionArea='global' range={150}>
			<Link
				data-umami-event='contact_info'
				href={href}
				className='group relative inline-block cursor-pointer rounded-full bg-background p-px font-medium leading-6 text-foreground no-underline shadow-2xl shadow-background/30 ~text-sm/lg'>
				<span className='absolute inset-0 overflow-hidden rounded-full'>
					<span className='absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100'></span>
				</span>
				<div className='relative z-10 rounded-full bg-background px-6 py-2 ring-1 ring-foreground/10'>
					<Magnetic intensity={0.1} springOptions={{ bounce: 0.1 }} actionArea='global' range={150}>
						<span>{text}</span>
					</Magnetic>
				</div>
				<span className='absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40'></span>
			</Link>
		</Magnetic>
	);
}
