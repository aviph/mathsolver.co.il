import Image from 'next/image';
import { Title } from '@/components/ui/title';
import { Project } from '@/lib/projects-data';
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card';
import styles from '@/styles/content-layout.module.css';
import arrow from '@/public/icons/arrow-up.svg';

export default function ProjectCard({ project }: { project: Project }) {
	return (
		<li>
			<a href={project.fullUrl} target='_blank' rel='noopener noreferrer'>
				<CardContainer>
					<CardBody className='flex flex-col gap-y-4'>
						{project.src ? (
							<CardItem as='figure' translateZ='50' className='overflow-hidden rounded-2xl'>
								<Image src={project.src} alt={project.name} />
							</CardItem>
						) : null}
						<div className='flex items-center justify-between gap-x-4'>
							<CardItem translateZ='30'>
								<Title className={styles.title3} level={3}>
									{project.showName}
								</Title>
							</CardItem>
							<CardItem translateZ='20' className='shrink-0'>
								<Image className='opacity-80 invert' src={arrow} alt='arrow' />
							</CardItem>
						</div>
					</CardBody>
				</CardContainer>
			</a>
		</li>
	);
}
