import React from 'react';
import Div from '../Div';
import ContactInfoWidget from '../Widget/ContactInfoWidget';
import MenuWidget from '../Widget/MenuWidget';
import Newsletter from '../Widget/Newsletter';
import SocialWidget from '../Widget/SocialWidget';
import TextWidget from '../Widget/TextWidget';

export default function Footer({ copyrightText, logoSrc, logoAlt, text }) {
  const serviceMenu = [
    {
      title: 'Bosh saxifa',
      href: '/index',
    },
    {
      title: 'Shaxsiy himoya vositalari',
      href: '/about',
    },
    {
      title: 'Nizom',
      href: '/portfolio',
    },
    {
      title: 'Baxtsiz hodisalar',
      href: '/case-study-showcase',
    },
    {
      title: 'Murojaatlar',
      href: '/contact',
    },
  ];

  return (
    <footer className="cs-fooer">
      <Div className="cs-fooer_main">
        <Div className="container">
          <Div className="row">
            <Div className="col-lg-4 col-sm-6">
              <Div className="cs-footer_item">
                <Div className="footer-img">
                  <TextWidget
                    logoSrc="/images/footer_logo.png"
                    logoAlt="Logo"
                    text="O'zbekiston Temir yo'llari"
                  />
                </Div>
                <SocialWidget />
              </Div>
            </Div>
            <Div className="col-lg-4 col-sm-6">
              <Div className="cs-footer_item">
                <MenuWidget menuItems={serviceMenu} menuHeading="Bo'limlar" />
              </Div>
            </Div>
            <Div className="col-lg-4 col-sm-6">
              <Div className="cs-footer_item">
                <ContactInfoWidget title="Aloqa uchun" />
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
      <Div className="container">
        <Div className="cs-bottom_footer">
          <Div className="cs-bottom_footer_left">
            <Div className="cs-copyright"><a href="https://www.instagram.com/sadulla_khaitov/">@sadulla_khaitov</a></Div>
          </Div>
          {/* <Div className="cs-bottom_footer_right">
            <MenuWidget menuItems={copyrightLinks} variant=" cs-style2" />
          </Div> */}
        </Div>
      </Div>
    </footer>
  );
}
