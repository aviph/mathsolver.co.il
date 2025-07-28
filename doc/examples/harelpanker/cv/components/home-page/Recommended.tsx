import Image from 'next/image';
import CVLayout from '@/components/home-page/CVLayout';
import FlickeringGrid from '@/components/ui/flickering-grid';
import QuoteIcon from '@/components/ui/quote-icon';
import SectionID from '@/components/layout/SectionID';
import { Text } from '@/components/ui/text';

import gabriel from '@/public/images/recommendations/gabriel.jpeg';

export default function Recommended() {
	return (
		<CVLayout>
			<div className='relative'>
				<div className='relative z-30 flex flex-col gap-y-4 rounded-md px-4 py-6'>
					<blockquote className='relative z-20 text-pretty font-medium !leading-normal ~text-xl/2xl'>
						Working with Harel as a freelance marketing developer for Permit.io for the last couple of years, I found
						him to be one of the most professional web developers I have ever met. The work is always smooth and
						coherent, from understanding the requirements to{' '}
						<span className='font-medium'>delivering the final pixel-perfect value.</span> I highly recommend him for
						any kind of project you have.
					</blockquote>
					<QuoteIcon />
				</div>
				{/*  */}
				<FlickeringGrid
					className='absolute inset-0 z-10 opacity-70 [mask-image:radial-gradient(220px_circle_at_center,white,transparent)] lg:[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]'
					squareSize={4}
					gridGap={6}
					color='#9333ea'
					maxOpacity={0.7}
					flickerChance={0.15}
					height={800}
					width={800}
				/>
			</div>
			<div className='relative z-30 flex flex-col gap-x-3 gap-y-3 px-4 sm:flex-row'>
				<figure className='h-14 w-14 shrink-0 overflow-hidden rounded-full'>
					<Image src={gabriel} alt='Gabriel Manor - Liechtman' />
				</figure>
				<div>
					<Text className='font-medium'>Gabriel Manor - Liechtman</Text>
					<Text className='!~text-xs/base'>
						VP, DevRel at Permit.io | Fine-Grained Authorization Advocate | Writer & Public Speaker | Native JavaScript
						Speaker
					</Text>
				</div>
			</div>
			<SectionID id='recommendations' />
		</CVLayout>
	);
}
