export default function SectionID({ id }: { id: string }) {
	return <div id={id} className='pointer-events-none absolute -top-24 left-0 h-px w-full'></div>;
}
