import { FloatingDock } from '@/components/ui/floating-dock';
import { links } from '@/lib/contact-data';

export default function ContactDock() {
	return (
		<div className='flex w-full items-center justify-center'>
			<FloatingDock items={links} />
		</div>
	);
}
