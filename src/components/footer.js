import React from 'react';
import { StaticImage } from "gatsby-plugin-image"
import "./layout.css"
import { Link } from 'gatsby';


const Footer = () => {
  return (
    <footer
    style={{
      marginTop: `var(--space-5)`,
      fontSize: `var(--font-sm)`,
    }}
  >
    © {new Date().getFullYear()} &middot; 
    {` `}
    <a href="/info">Patrimonio Nacional</a>

  
<Link to="/avisolegal"><a>Aviso Legal</a></Link>
<Link to="/accesibilidad"><a>Accesibilidad</a></Link>
<Link to="/politicaprivacidad"><a>Política de Privacidad</a></Link>
<Link to="/politicacookies"><a>Política de cookies</a></Link>




<div className='footerfoto'>
<StaticImage
  src="../images/logo-tandem.png"
  loading="eager"
  width={60}
  quality={80}
  formats={["auto", "webp", "avif"]}
  alt=""
  style={{ marginBottom: `var(--space-3)` }}
/>
<StaticImage
  src="../images/logotipo.png"
  loading="eager"
  width={40}
  quality={95}
  formats={["auto", "webp", "avif"]}
  alt=""
  style={{ marginBottom: `var(--space-3)` }}
/>
</div>
<br></br>



  </footer>
  );
};

export default Footer;