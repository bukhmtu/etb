import { Icon } from '@iconify/react';
import Div from '../Div';
import Link from 'next/link';

export default function SocialWidget() {
  return (
    <Div className="cs-social_btns cs-style1">
      <Link href="https://www.instagram.com/bmtu_press_service/" className="cs-center">
        <Icon icon="fa6-brands:instagram" />
      </Link>
      <Link href="https://t.me/bmtu_press" className="cs-center">
        <Icon icon="fa6-brands:telegram" />
      </Link>
      <Link href="https://www.youtube.com/@BuxoroMTU" className="cs-center">
        <Icon icon="fa6-brands:youtube" />
      </Link>
    </Div>
  );
}
