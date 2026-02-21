import React, { memo } from 'react';
import LogoLoop from './LogoLoop';
import '../styles/styles.css';
import { FaGift } from "react-icons/fa6";
import { MdFileDownloadDone } from "react-icons/md";
import { FaNetworkWired } from "react-icons/fa6";
import { BsPeopleFill } from "react-icons/bs";
import { MdDeviceUnknown } from "react-icons/md";
import { SiHomepage } from "react-icons/si";
import { FaGlobeAmericas } from "react-icons/fa";
import { PiRankingFill } from "react-icons/pi";


/* ── Trust items rendered as custom nodes ── */
const trustItems = [
  { icon: <FaGift />, text: 'NAAC A+ Accredited' },
  { icon: <MdFileDownloadDone />, text: 'UGC Entitled Programs' },
  { icon: <FaNetworkWired />
, text: '30,000+ Alumni Network' },
  { icon: <BsPeopleFill />, text: '500+ Hiring Partners' },
  { icon: <MdDeviceUnknown />, text: 'Learn on Any Device' },
  { icon: <SiHomepage />
, text: 'Govt. Recognised Degree' },
  { icon: <FaGlobeAmericas />, text: 'Global Recognition' },
  { icon: <PiRankingFill />, text: 'NIRF Ranked University' },
];

/* Separator dot between items */
const Separator = () => (
  <span className="trust-separator" aria-hidden="true">✦</span>
);

/* Build logos array — each item is a custom React node */
const logos = trustItems.flatMap((item, i) => [
  {
    node: (
      <div className="trust-chip">
        <span className="trust-chip__icon">{item.icon}</span>
        <span className="trust-chip__text">{item.text}</span>
      </div>
    ),
    title: item.text,
  },
  /* insert separator between items (not after last) */
  ...(i < trustItems.length - 1
    ? [{ node: <Separator />, title: '' }]
    : []),
]);

const TrustBar = memo(() => (
  <section className="trust-bar-marquee" aria-label="University accreditations and highlights">
    <LogoLoop
      logos={logos}
      speed={55}
      direction="left"
      width="100%"
      logoHeight={20}
      gap={0}
      pauseOnHover
      fadeOut
      fadeOutColor="#f8fafc"
      scaleOnHover={false}
      ariaLabel="Trust highlights"
    />
  </section>
));

TrustBar.displayName = 'TrustBar';
export default TrustBar;


