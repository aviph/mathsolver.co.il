import { StaticImageData } from 'next/image';
import alta from '@/public/images/clients/alta.svg';
import antidote from '@/public/images/clients/antidote.svg';
import everafter from '@/public/images/clients/everafter.svg';
import groundcover from '@/public/images/clients/groundcover.svg';
import port from '@/public/images/clients/port.svg';
import permit from '@/public/images/clients/permit.svg';
import lin from '@/public/images/clients/lin.svg';
import obol from '@/public/images/clients/obol.svg';

export type Client = {
	name: string;
	logo: StaticImageData;
	fullUrl: string;
	showName: string;
};

export const data: Client[] = [
	{ name: 'Alta', logo: alta, fullUrl: 'https://www.altahq.com/', showName: 'Alta - altahq.com' },
	{
		name: 'Antidote',
		logo: antidote,
		fullUrl: 'https://www.antidotehealth.com/',
		showName: 'Antidote - antidotehealth.com',
	},
	{ name: 'Everafter', logo: everafter, fullUrl: 'https://www.everafter.ai/', showName: 'Everafter - everafter.ai' },
	{
		name: 'Groundcover',
		logo: groundcover,
		fullUrl: 'https://www.groundcover.com/',
		showName: 'Groundcover - groundcover.com',
	},
	{ name: 'Port', logo: port, fullUrl: 'https://www.port.io/', showName: 'Port - port.io' },
	{ name: 'Permit', logo: permit, fullUrl: 'https://www.permit.io/', showName: 'Permit - permit.io' },
	{ name: 'Lin', logo: lin, fullUrl: 'https://www.lin.health/', showName: 'Lin - lin.health' },
	{ name: 'Obol', logo: obol, fullUrl: 'https://www.obol.app/', showName: 'Obol - obol.app' },
];
