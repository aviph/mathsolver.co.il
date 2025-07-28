import Link from 'next/link';
import { AnimatedBackground } from '@/components/ui/animated-card-background';
import { menuLinks } from '@/lib/navbar-links';
import MainLink from '@/components/ui/MainLink';

export default function DesktopMenu() {
	return (
		<div className='flex items-center gap-x-2'>
			<AnimatedBackground
				className='rounded-lg bg-foreground'
				transition={{
					type: 'spring',
					bounce: 0.2,
					duration: 0.3,
				}}
				enableHover>
				{menuLinks.map((tab) => (
					<Link
						key={tab.name}
						data-id={tab.name}
						href={tab.href}
						className='px-2 py-0.5 transition duration-300 hover:text-background'>
						{tab.name}
					</Link>
				))}
			</AnimatedBackground>
			<div className='pl-5'>
				<MainLink />
			</div>
		</div>
	);
}
