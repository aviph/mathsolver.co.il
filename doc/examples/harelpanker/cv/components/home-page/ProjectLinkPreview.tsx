import Image from 'next/image';
import { Title } from '@/components/ui/title';
import { LinkPreview } from '@/components/ui/link-preview';
import arrow from '@/public/icons/arrow-up.svg';

export default function ProjectLinkPreview({ fullUrl, showName }: { fullUrl: string; showName: string }) {
	return (
		<li>
			<LinkPreview
				url={fullUrl}
				className='group relative z-10 flex w-full items-center justify-between overflow-hidden border-b border-b-transparent px-2 py-4 text-foreground transition duration-300 hover:z-20 hover:border-b-foreground lg:px-4'>
				<Title level={5} className='~text-lg/2xl'>
					{showName}
				</Title>
				<Image
					className='opacity-80 invert transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1'
					src={arrow}
					alt='arrow'
				/>
				<div className='absolute inset-0 translate-y-full bg-foreground opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-10'></div>
			</LinkPreview>
		</li>
	);
}
