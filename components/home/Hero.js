import * as styled from './styles';

import { ChatBotContext } from 'components/layout/Layout';

import { useContext } from 'react';
import { useViewport } from 'hooks/useViewport';

export default function Hero() {
  const { theme } = useContext(ChatBotContext);
  const { width } = useViewport();

  return (
    <styled.Hero>
       <styled.Home>


      </styled.Home>
      <styled.Description
        variants={styled.descriptionVariants}
        initial="hidden"
        animate="visible"
      >
        <h1 >
          Hi! 
        </h1>
        <h1>I'm Aditya K.</h1>
        <h1> <span> Developer/ Creator/ Finance</span></h1>
        <p>
          I love spending hours and hours building things, resolving problems,
          and learning new technologies.
          <span>I help bring order to chaos and execute your ideas. Enabling you to launch, scale and grow your business with a thorough process and swift execution.</span>
        </p>
      </styled.Description>
     
      {width < 850 && (
        <styled.LinkWrapper>
          <styled.NavLink href="https://github.com/inductor69">
            <styled.Icon
              src={`${
                theme === 'light'
                  ? '/icons/github.svg'
                  : '/icons/github-dark.svg'
              }`}
              alt="github icon"
            ></styled.Icon>
            <span>
              GitHub</span>
          </styled.NavLink>
          <styled.NavLink
            href="https://www.linkedin.com/in/aditya-kumar-b99b1519b/"
            rotate="-1deg"
          >
            <styled.Icon
              src={`${
                theme === 'light'
                  ? '/icons/linkedin.svg'
                  : '/icons/linkedin-dark.svg'
              }`}
              alt="linkedin icon"
            ></styled.Icon>
            <span>LinkedIn</span>
          </styled.NavLink>
        </styled.LinkWrapper>
      )}
    </styled.Hero>
  );
}
