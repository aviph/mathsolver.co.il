import { TracingBeam } from '@/components/ui/tracing-beam';
import CareerObjectives from '@/components/home-page/CareerObjectives';
import WorkExperience from '@/components/home-page/WorkExperience';
import Projects from '@/components/home-page/Projects';
import Education from '@/components/home-page/Education';
import Contact from '@/components/home-page/Contact';
import Recommended from '@/components/home-page/Recommended';

export default function ScrollContent() {
	return (
		<TracingBeam>
			<div className='flex flex-col gap-y-28 pl-2 md:pl-0 xl:gap-y-36'>
				<CareerObjectives />
				<WorkExperience />
				<Projects />
				<Recommended />
				<Education />
				<Contact />
			</div>
		</TracingBeam>
	);
}
