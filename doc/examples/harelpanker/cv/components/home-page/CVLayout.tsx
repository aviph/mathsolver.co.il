import Section from '@/components/ui/section';
import Container from '@/components/ui/container';
import { Title } from '@/components/ui/title';
import styles from '@/styles/content-layout.module.css';
import SectionID from '@/components/layout/SectionID';

export default function CVLayout({
	children,
	title,
	element = 'section',
	id,
}: {
	children: React.ReactNode;
	title?: string;
	element?: 'footer' | 'div' | 'section';
	id?: string;
}) {
	const Element = element === 'section' ? Section : element;
	return (
		<Element className='relative z-20 !~px-5/12'>
			<Container className='flex flex-col gap-y-6 pl-6 lg:grid lg:grid-cols-3 lg:gap-x-6'>
				<div className={`${title ? '' : 'hidden lg:block'}`}>
					{title ? (
						<div className='lg:sticky lg:top-20'>
							<Title level={2}>{title}</Title>
						</div>
					) : null}
				</div>

				<div className={styles.flexContent}>{children}</div>
			</Container>
			{id ? <SectionID id={id} /> : null}
		</Element>
	);
}
