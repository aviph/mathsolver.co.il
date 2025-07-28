import Image from 'next/image';
import Section from '@/components/ui/section';
import Container from '@/components/ui/container';
import { Title } from '@/components/ui/title';
import { Cover } from '@/components/ui/cover';
import { Text } from '@/components/ui/text';
import { HeroLinkProps } from '@/types/contact-links';
import { linksData } from '../../lib/hero-section-data';

const HeroLink = ({ href, src, alt, width, height, text }: HeroLinkProps) => {
	return (
		<a
			href={href}
			target='_blank'
			rel='noopener noreferrer'
			className='flex items-center gap-x-2 rounded-md px-2 py-1 transition hover:bg-neutral/40'>
			<Image src={src} alt={alt} width={width} height={height} priority />
			{text ? (
				<Text element='span' className='!~text-xs/sm'>
					{text}
				</Text>
			) : null}
		</a>
	);
};

export default function HeroSection() {
	return (
		<Section>
			<Container className='flex-col gap-y-12 py-12 text-center lg:py-24 lg:text-left'>
				<div className='flex flex-col items-center gap-x-9 gap-y-3 lg:flex-row'>
					<figure className='max-w-[32svw] shrink-0 rounded-full border border-foreground/20 p-[2px] lg:max-w-none'>
						<Image src='/images/profile2.png' alt='Harel Panker front end Engineer' width={200} height={200} priority />
					</figure>
					<div className='flex flex-col gap-y-2'>
						<Title level={1} className='font-medium !~text-3xl/7xl'>
							<span className='block'>Hi, I&apos;m Harel,</span> a Front End <Cover>Engineer</Cover>
						</Title>

						<div className='flex justify-center gap-x-4 lg:justify-start'>
							{linksData.map((link) => (
								<HeroLink key={link.href} {...link} />
							))}
						</div>
					</div>
				</div>
			</Container>
		</Section>
	);
}
