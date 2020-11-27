import React from 'react';
import styled from 'styled-components';

const FooterDiv = styled.div`

.footer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #1e2022;
  color: #52616b;
}

.footer a {
  text-decoration: none;
}

.footer a:hover {
  text-decoration: none;
}

.copyright {
    padding-bottom: 15px;
}

.footerLinks,
.copyright {
    margin: 5px auto;
}

.fab,
.fas {
  width: 75px;
  font-size: 25px;
  padding: 10px;
  transition: 0.3s ease;
  color: #52616b;
}

.footer .fab:hover,
.footer .fas:hover {
  color: #c9d6df;
}

.copyright-text {
    padding-bottom: 15px;
}

`;

const year = new Date().getFullYear();

function Footer() {
    return(
        <FooterDiv className="footer nhc-bg-color-4">
            <div className="footerLinks">
                <a
                    href="https://www.facebook.com/nick.hodge.9"
                    className="fab fa-facebook-f"
                ></a>
                <a
                    href="https://github.com/magic-hodge"
                    className="fab fa-github"></a>
                <a
                    href="https://www.instagram.com/magic.hodge"
                    className="fab fa-instagram"
                ></a>
            </div>
            <div className="copyright">
                <span className="copyright-text nhc-color-3">
                    Nicholas Hodge. All rights reserved - Copyright © {year} 
                </span>
            </div>
        </FooterDiv>
    );
}

export default Footer;