'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/footer.module.css';
import Settings from '../../public/stores/settings.json';

interface LicenseInformation {
  label: string;
  license: {
    label: string;
    number: string;
  }[];
}

interface Certification {
  label: string;
  icon: string;
  split: string;
  link: string;
}
interface NavigationLink {
  label: string;
  link: string;
}

interface NavigationSections {
  service: NavigationLink[];
  Resources: NavigationLink[];
  Legal: NavigationLink[];
}

interface FooterProps {
  brandLogo: string;
  copyright_max: string;
  copyright_min: string;
  navigation: NavigationSections;
  address: string;
  pincode: string;
  InstituteName: string;
  InstituteDiscription: string;
  InstituteDetails: string;
  license_informations: LicenseInformation;
  certification: Certification[];
}

const Footer: React.FC<FooterProps> = (props) => {
  const {
    brandLogo,
    copyright_max,
    copyright_min,
    navigation,
    license_informations,
    address,
    pincode,
  } = props;
  const { socialMediaIcons, contactIcons, footer } = Settings;

  return (
    <div className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.left}>
          <div className={styles.logo}>
            <div className={styles.brandLogo}>
              <Image
                className={styles.brandLogoImg}
                style={{ cursor: 'pointer' }}
                src={brandLogo}
                alt="alt"
                width={200}
                height={70}
              />
            </div>
            <div>
              <p className={styles.addressText}>{address}</p>
              <p className={styles.addressBoldText}>{pincode}</p>
            </div>
          </div>
          <div className={styles.logoContent}>
            <div className={styles.contact}>
              {contactIcons.map((contact, index) => (
                <Link
                  href={contact.link}
                  key={index}
                  style={{ display: 'flex' }}
                  className={styles.contactDiv}>
                  <Image
                    style={{ cursor: 'pointer' }}
                    src={contact.icon}
                    alt={contact.label}
                    width={20}
                    height={20}
                  />
                  <p className={styles.contactText}>{contact.label}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.leftRight}>
            <div className={styles.leftContent}>
              <div className={styles.contentDiv}>
                <h2 className={styles.instituteDis}>Services</h2>
                <div className={styles.listDiv}>
                  {navigation.service.map((item, index) => (
                    <div className={styles.numbereflexbox} key={index}>
                      <Link href={item.link} className={styles.licenseName}>
                        {item.label}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
              <div className={styles.contentDiv}>
                <h2 className={styles.instituteDis}>Resources</h2>
                <div className={styles.listDiv}>
                  {navigation.Resources.length === 0 ? (
                    <p>No resources available.</p>
                  ) : (
                    navigation.Resources.map((item, index) => (
                      <div className={styles.numbereflexbox} key={index}>
                        <Link href={item.link} className={styles.licenseName}>
                          {item.label}
                        </Link>
                      </div>
                    ))
                  )}
                </div>
              </div>
              <div className={styles.contentDiv}>
                <h2 className={styles.instituteDis}>Legal</h2>
                <div className={styles.listDiv}>
                  {navigation.Legal.length === 0 ? (
                    <p>No legal information available.</p>
                  ) : (
                    navigation.Legal.map((item, index) => (
                      <div className={styles.numbereflexbox} key={index}>
                        <Link href={item.link} className={styles.licenseName}>
                          {item.label}
                        </Link>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>

            <div className={styles.rightRight}>
              <h4 className={styles.licenseLabel}>
                {/* {license_informations.label} */}
                Follow us on <br />
                social medias.
              </h4>
              <div className={styles.socialMedia}>
                {socialMediaIcons.map((socialMedia, index) => (
                  <Link href={socialMedia.link} key={index} passHref>
                    <div>
                      <Image
                        className={styles.socialMediaIcons}
                        style={{ cursor: 'pointer' }}
                        src={socialMedia.icon}
                        alt={socialMedia.label}
                        width={30}
                        height={30}
                      />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          {/* <div className={styles.announcementMain}>
						<div className={styles.announcementHead}>
							{labels.slice(0, 3).map((item, i) => (
								<Link
									key={i}
									href={item.link}
									className={styles.announcementHeadPhara}>
									{item.label}
								</Link>
							))}
						</div>
					</div> */}
        </div>
      </div>
      <div>
        <div className={styles.desktop}>
          <div className={styles.content}>
            <p className={styles.contentText}>{copyright_max}</p>
          </div>
        </div>
        <div className={styles.mobile}>
          <div className={styles.content}>
            <p className={styles.contentText}>{copyright_min}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
