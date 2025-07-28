import CVLayout from '@/components/home-page/CVLayout';
import { Title } from '@/components/ui/title';
import { Text } from '@/components/ui/text';
import { IconPointFilled } from '@tabler/icons-react';
import styles from '@/styles/content-layout.module.css';
import WorkExperienceLogos from '@/components/home-page/WorkExperienceLogos';

type DataProps = {
	id: number;
	isStrong: boolean;
	text: string;
};

const data: DataProps[] = [
	{
		id: 1,
		isStrong: false,
		text: 'Built and maintained websites for clients, collaborating closely with marketing teams and designers.',
	},
	{
		id: 2,
		isStrong: false,
		text: 'Developed user-friendly, performance-optimized websites, with a focus on scalability and maintainability.',
	},
	{
		id: 3,
		isStrong: false,
		text: 'Delivered SEO-optimized, visually compelling solutions tailored to each client&apos;s needs.',
	},
];

export default function WorkExperience() {
	return (
		<CVLayout title='Work Experience' id='work-experience'>
			<Title className={styles.title3} level={3}>
				Independent developer | 2019 - PRESENT
			</Title>
			<ul className={styles.ul}>
				{data.map(({ id, isStrong, text }) => (
					<li key={id}>
						<IconPointFilled />
						<Text>{isStrong ? <strong className={styles.strong}>{text}</strong> : text}</Text>
					</li>
				))}
			</ul>

			<Title className='!~text-lg/2xl' level={3}>
				Clients I&apos;m proudly working with:
			</Title>
			<WorkExperienceLogos />
		</CVLayout>
	);
}
