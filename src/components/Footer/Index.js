import React from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialLogo to="/">Pizza</SocialLogo>
          <SocialIcons>
            <SocialIconLink href="/" target="_blank" aria-label="Facebook">
              <FaFacebook />
            <SocialIconLink href='/' target='_blank' aria-label='Instagram'>
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink href='/' target='_blank' aria-label='Youtube'>
              <FaYoutube />
            </SocialIconLink>
            <SocialIconLink
              href='//www.twitter.com/briandesignz'
              target='_blank'
              aria-label='Twitter'
              rel='noopener noreferrer'
            >
                <FaTwitter />
            </SocialIconLink>
          </SocialIcons>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
