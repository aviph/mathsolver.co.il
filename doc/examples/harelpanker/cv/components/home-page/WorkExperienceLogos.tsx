import Image from 'next/image';
import { data } from '@/lib/clients-data';
import { ContentLoop } from '@/components/ui/content-loop';
import FlickeringGrid from '@/components/ui/flickering-grid';

export default function WorkExperienceLogos() {
	return (
		<div className='relative flex aspect-video max-w-full items-center justify-center p-5'>
			<ContentLoop className='z-20 mb-10 flex h-full w-full flex-1 grow flex-col items-center justify-center lg:mb-0 [&>div]:w-2/3 lg:[&>div]:w-1/2'>
				{data.map((item) => (
					<a key={item.name} href={item.fullUrl} target='_blank' rel='noopener noreferrer'>
						<figure>
							<Image src={item.logo} alt={item.name} className='w-full' />
						</figure>
					</a>
				))}
			</ContentLoop>
			<ContentLoop className='absolute inset-0 bottom-3 left-3 top-auto z-20'>
				{data.map((item) => (
					<a key={item.name} href={item.fullUrl} target='_blank' rel='noopener noreferrer'>
						<div>{item.showName}</div>
					</a>
				))}
			</ContentLoop>

			<FlickeringGrid
				className='absolute inset-0 z-10 opacity-70 [mask-image:radial-gradient(220px_circle_at_center,white,transparent)] lg:[mask-image:radial-gradient(240px_circle_at_center,white,transparent)]'
				squareSize={4}
				gridGap={6}
				color='rgb(236, 72, 153)'
				maxOpacity={0.7}
				flickerChance={0.15}
				height={800}
				width={800}
			/>
		</div>
	);
}
