import * as styled from './styles';

import { ChatBotContext } from 'components/layout/Layout';

import { useContext, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { useViewport } from 'hooks/useViewport';
import { useAnimation } from 'framer-motion';
import Image from 'next/image';
import Sparkles from '../home/sparkle';


export default function AboutContent() {
  const { setChatBotState } = useContext(ChatBotContext);
  const { width } = useViewport();

  const ref = useRef();

  const controls = useAnimation();

  const [inViewRef, inView] = useInView({
    threshold: 0.35,
  });
  const [inViewRef2, inView2] = useInView({
    threshold: 0.35,
  });
  const [inViewRef3, inView3] = useInView({
    threshold: 0.35,
  });

  useEffect(() => {
    if (width < 900) {
      controls.start('visible');
      controls.start('visible2');
      controls.start('visible3');
    } else {
      if (inView) controls.start('visible');

      if (inView2) controls.start('visible2');

      if (inView3) controls.start('visible3');
    }
  }, [controls, inView, inView2, inView3, width]);
  
  return (
    <styled.About>
      <div className="heading">
        <h2>About me</h2>
        <p>
          Hello! My name is Aditya, I'm a&nbsp;
          <span className="line"><Sparkles>self-taught</Sparkles></span> full-stack developer
          <br></br>I’m an undergrad at IIT-D and I'm Interested in Full-Stack development.
        </p>
        <span
          className="scroll"
          onClick={() =>
            ref.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
          }
        ></span>
      </div>
      <div className="content">
        <div className="grid-container" ref={inViewRef}>
          <styled.Img
            animate={controls}
            initial="hidden"
            transition={{ duration: 0.5 }}
            variants={{
              visible: { opacity: 1, y: -50 },
              hidden: { opacity: 0, y: 0 },
            }}
            ref={ref}
          >
            <Image
              src="v1624633658/about/typewriter.png"
              alt="a cool typewriter"
              width={420}
              height={400}
              layout="responsive"
            />
          </styled.Img>
        </div>
        <div className="grid-container">
          <styled.Title
            animate={controls}
            initial="hidden"
            transition={{ duration: 0.5, delay: 0.3 }}
            variants={{
              visible: { opacity: 1, y: -50 },
              hidden: { opacity: 0, y: 0 },
            }}
          >
          <Sparkles>  I'm the one you'd like to work with</Sparkles> 
          </styled.Title>
          <styled.Description
            animate={controls}
            initial="hidden"
            transition={{ duration: 0.5, delay: 0.3 }}
            variants={{
              visible: { opacity: 1, y: -50 },
              hidden: { opacity: 0, y: 0 },
            }}
          >
            <p>
              I’m a hard working and dedicated person with a determination to
              deliver the very highest quality. I take great pride in my work,
              and I always try to better myself with every project I work on.
            </p>
            <p></p>
          </styled.Description>
        </div>
        <div className="grid-container" ref={inViewRef2}>
          <styled.Title
            animate={controls}
            initial="hidden"
            transition={{ duration: 0.5 }}
            variants={{
              visible2: { opacity: 1, y: -50 },
              hidden: { opacity: 0, y: 0 },
            }}
          >
           <Sparkles> I like to dream more, learn more and become more.</Sparkles> 
          </styled.Title>
          <styled.Description
            animate={controls}
            initial="hidden"
            transition={{ duration: 0.5 }}
            variants={{
              visible2: { opacity: 1, y: -50 },
              hidden: { opacity: 0, y: 0 },
            }}
          >
            <p>
              Since I wrote my first 'hello world' in HTML, I have gained
              experience in:
            </p>

            <ul className="skills one-column">
              <li>
                Building Front-End Web Applications ( HTML, JavaScript ES6,
                React, Next.js, Vue)
              </li>
              <li>
                Applying various CSS solutions( Styled-components, Tailwind CSS,
                Sass, CSS modules)
              </li>
              <li>Building Back-End database(MongoDB, Firebase)</li>
              <li>Interacting with database(REST APIs, Apollo GraphQL )</li>
              <li>Version Control tools(Git, Github)</li>
            </ul>

            <p>
              I’m also a fast learner, able to pick up new skills and juggle
              different projects with relative ease.
            </p>

            <p>The following are things I'm planning to learn this year:</p>
            <ul className="skills">
              <li>TypeScript</li>
              <li>Testing</li>
            </ul>
          </styled.Description>
        </div>
        <div className="grid-container">
          <styled.Img
            animate={controls}
            initial="hidden"
            transition={{ duration: 0.5, delay: 0.3 }}
            variants={{
              visible2: { opacity: 1, y: -50 },
              hidden: { opacity: 0, y: 0 },
            }}
          >
            <Image
              src="v1624633658/about/tools.png"
              alt="a cool rocket"
              width={400}
              height={450}
              layout="responsive"
            />
          </styled.Img>
        </div>
        <div className="grid-container" ref={inViewRef3}>
          <styled.Img
            animate={controls}
            initial="hidden"
            transition={{ duration: 0.5 }}
            variants={{
              visible3: { opacity: 1, y: -50 },
              hidden: { opacity: 0, y: 0 },
            }}
          >
            <Image
              src="v1624633658/about/mails.png"
              alt="a cool mailbox"
              width={430}
              height={450}
              layout="responsive"
            />
          </styled.Img>
        </div>
        <div className="grid-container">
          <styled.Title
            animate={controls}
            initial="hidden"
            transition={{ duration: 0.5, delay: 0.3 }}
            variants={{
              visible3: { opacity: 1, y: -50 },
              hidden: { opacity: 0, y: 0 },
            }}
          ><p>
          I'm always open to <Sparkles> job opportunities</Sparkles> and new connections.
        </p>
             
          </styled.Title>
          <styled.Description
            animate={controls}
            initial="hidden"
            transition={{ duration: 0.5, delay: 0.3 }}
            variants={{
              visible3: { opacity: 1, y: -50 },
              hidden: { opacity: 0, y: 0 },
            }}
          >
            <p>
              Shoot me over an email, have a look at my resume, or just&nbsp;
              <span onClick={() => setChatBotState('open')} className="chat">
                talk
              </span>
              &nbsp;with me!
            </p>
            <div className="buttons">
              <styled.Button>
                <a href="mailto:adityakiitdelhi@gmail.com">
                  
                  <button className="learn-more">
        <span className="circle" aria-hidden="true">
          <span className="icon arrow" />
        </span>
        <span className="button-text">E-mail</span>
      </button>
                </a>
              </styled.Button>
              
              <styled.Button>
                <a href="https://drive.google.com/file/d/1B6y0zHE4q9WVQXVVDDPKXEjTIfGRm9Cx/view?usp=sharing">
             
                  
                  <button className="learn-more">
        <span className="circle" aria-hidden="true">
          <span className="icon arrow" />
        </span>
        <span className="button-text"> Resume</span>
      </button>
                </a>
              </styled.Button>
            </div>
          </styled.Description>
        </div>
      </div>
      <div className="copyright">
         Built with love ❤️ by <br /> Aditya © 2021
      </div>
    </styled.About>
  );
}

