'use client';

import { useState, useEffect } from 'react';
import CVLayout from '@/components/home-page/CVLayout';
import { Text } from '@/components/ui/text';
import { EvervaultCard } from '@/components/ui/evervault-card';
import { data } from '@/lib/education-data';
import { Title } from '@/components/ui/title';
import { IconPointFilled } from '@tabler/icons-react';
import styles from '@/styles/content-layout.module.css';

const coreSkills = [
	{
		title: 'Web Development',
		description: 'Expert in HTML, CSS / TailwindCSS, and JavaScript / TypeScript',
	},
	{
		title: 'Frontend Frameworks',
		description: 'Advanced proficiency in React and Next.js',
	},
	{
		title: 'Performance & UX',
		description: 'Deep knowledge of technical SEO, UI/UX, and performance optimization',
	},
];

const tools = [
	{ title: 'No-Code Development', description: 'Experienced with Webflow and WebStudio' },
	{ title: 'Version Control', description: 'Proficient in Git' },
];

export default function Education() {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [trigger, setTrigger] = useState(true);

	useEffect(() => {
		const interval = setInterval(() => {
			setTrigger((prev) => !prev);
		}, 1500);
		const interval2 = setInterval(() => {
			setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
		}, 3000);

		return () => {
			clearInterval(interval);
			clearInterval(interval2);
		};
	}, []);

	return (
		<CVLayout title='Knowledge' id='knowledge'>
			<Title level={3} className={styles.title3}>
				Core Skills
			</Title>
			<ul className={styles.ul}>
				{coreSkills.map(({ title, description }) => (
					<li key={title}>
						<IconPointFilled />
						<Text>
							<strong className={styles.strong}>{title}:</strong> {description}
						</Text>
					</li>
				))}
			</ul>

			<Title level={3} className={styles.title3}>
				Tools
			</Title>

			<ul className={styles.ul}>
				{tools.map(({ title, description }) => (
					<li key={title}>
						<IconPointFilled />
						<Text>
							<strong className={styles.strong}>{title}:</strong> {description}
						</Text>
					</li>
				))}
			</ul>

			<div className='relative rounded-3xl border border-background/50 p-4'>
				<EvervaultCard text={data[currentIndex]} trigger={trigger} />
			</div>

			<Title level={3} className={styles.title3}>
				WEB DEVELOPMENT COURSE
			</Title>
			<Text>Technion — Institute of Technology, Israel, 2017</Text>
		</CVLayout>
	);
}
