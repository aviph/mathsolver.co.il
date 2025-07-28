'use client';

import { useWindowScroll, useViewportSize } from '@mantine/hooks';
import { useEffect, useState } from 'react';
import Logo from '@/components/layout/Logo';
import DesktopMenu from './DesktopMenu';
import MainLink from '@/components/ui/MainLink';

export default function Navbar() {
	const desktopWidth = 1024;
	const [scroll] = useWindowScroll();
	const { width } = useViewportSize();
	const [isVisible, setIsVisible] = useState(true);
	const [lastScrollY, setLastScrollY] = useState(0);

	useEffect(() => {
		if (scroll.y > 50) {
			if (scroll.y > lastScrollY) {
				setIsVisible(false);
			} else if (scroll.y < lastScrollY) {
				setIsVisible(true);
			}
		} else {
			setIsVisible(true);
		}

		setLastScrollY(scroll.y);
	}, [scroll.y, lastScrollY]);

	return (
		<div
			className={`
        sticky top-0 z-30 flex w-full items-center justify-between 
        border-b border-b-foreground/20 bg-background/60 px-5 
        text-foreground backdrop-blur backdrop-filter transition-transform duration-300
        ~py-2/4 lg:px-10
        ${!isVisible ? '-translate-y-full' : 'translate-y-0'}
      `}>
			<Logo />
			{width > desktopWidth ? <DesktopMenu /> : <MainLink />}
		</div>
	);
}
