'use client';
import React, { useEffect, useState } from 'react';
import {
  Head,
  Slick,
  Float,
  SplashScreen,
  Announcement,
  ContactPage,
  Nav,
  InsuranceList,
  Footer,
} from './components';
import Settings from '../public/stores/settings.json';
import styles from './page.module.css';
import './globals.css';
import { usePathname } from 'next/navigation';

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { brand, Mobilenavigation, announcement, links, footer } = Settings;
  const [isSlickOn, setIsSlickOn] = useState(false);
  const menuHandler = () => {
    setIsSlickOn(!isSlickOn);
  };

  const pathname = usePathname();
  const isHome = pathname === '/';
  const [isLoading, setIsLoading] = useState(isHome);

  useEffect(() => {
    if (isLoading) {
      return;
    }
  }, [isLoading]);

  const renderSlick = (
    <main>
      {isLoading && isHome ? (
        <SplashScreen logoPath={brand.logoPath} finishLoading={() => setIsLoading(false)} />
      ) : (
        <>
          <div className={styles.headline}>
            <Announcement
              title={announcement.title}
              content={announcement.content}
              icons={announcement.icons}
            />
            {/* <Contact /> */}
            <Head
              menuHandler={menuHandler}
              logoPath={brand.logoPath}
              quotes={brand.quotes}
              breakAfter={brand.breakAfter}
              homeLogo={Mobilenavigation.homeIconUrl}
            />
            <Nav homeLogo={Mobilenavigation.homeIconUrl} isSlickOn={isSlickOn} />
          </div>

          {isSlickOn && (
            <Slick
              menuHandler={menuHandler}
              ctrlLinks={links.ctrlLinks}
              logoPath={brand.logoPath}
            />
          )}

          {children}
          {/* <ContactPage /> */}
          <InsuranceList
            brandLogo={footer.brandLogo}
            copyright_max={footer.copyright_max}
            copyright_min={footer.copyright_min}
            navigation={footer.navigation}
            address={footer.address}
            pincode={footer.pincode}
            InstituteName={footer.InstituteName}
            InstituteDiscription={footer.Institute_discription}
            InstituteDetails={footer.Institute_details}
            license_informations={footer.license_informations}
            certification={footer.certification}
          />
          <Footer
            brandLogo={footer.brandLogo}
            copyright_max={footer.copyright_max}
            copyright_min={footer.copyright_min}
            navigation={footer.navigation}
            address={footer.address}
            pincode={footer.pincode}
            InstituteName={footer.InstituteName}
            InstituteDiscription={footer.Institute_discription}
            InstituteDetails={footer.Institute_details}
            license_informations={footer.license_informations}
            certification={footer.certification}
          />
        </>
      )}
    </main>
  );

  return renderSlick;
}
