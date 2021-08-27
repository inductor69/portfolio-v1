import * as styled from '../portfolio/styles';
import Sparkles from 'components/home/sparkle';
import Image from 'next/image';


export default function FinstryContent() {
  return (
    <styled.Portfolio>
      <styled.TextContainer>
        <styled.Title>Finstry</styled.Title>
        <styled.Description>
          Finstry is a finance based newsletter MVP built with
          React, PixiJS and serving MailChimp API. It  is a Generative landing page
          supercharged with WebGL Powered Background. The colorful orbs move with own brain.{' '}
         
        </styled.Description>
        <styled.Table>
          <tbody>
            <tr>
              <th>Stack</th>
              <th>Live</th>
            </tr> 
            <tr>
              <td>
                <span className="arrow">▹</span>React
              </td>
              <td>
                <a target="_blank" href="https://finstry.in">
                  <span className="link">Site</span>
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <span className="arrow">▹</span>PixiJS
              </td>
              <td>
                <a href="https://github.com/">
                  <span className="link">Details</span>
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <span className="arrow">▹</span>WebGL
              </td>
             
            </tr>
          </tbody>
        </styled.Table>
      </styled.TextContainer>
      <styled.ImageContainer>
        <Image
          src="v1624633658/about/finstry.png"
          alt="hotflix demo"
          width={1266}
          height={720}
        />
      </styled.ImageContainer>
      <styled.TextContainer>
        <styled.SubTitle>Creating the background animation</styled.SubTitle>
        <styled.Description>
        <ul className="skills one-column">
              <li>
              PixiJS - A powerful graphics library built on WebGL, we will use it to render our orbs.
              </li>
              <li>
              KawaseBlurFilter - A PixiJS filter plugin for ultra smooth blurs.
              </li>
              <li>SimplexNoise - Used to generate a stream of self-similar random numbers. More on this shortly.</li>
              <li>hsl-to-hex - A tiny JS utility for converting HSL colors to HEX.</li>
              <li>debounce - A  JavaScript debounce function.</li>
            </ul>
          <span>
          I also have two utility functions `random` (It will return a random number within a limited range. For example, “Give me a random number between 5 and 10”) and
          map takes a number from one range and maps it to another. For example, if a number (0.5) usually exists in a range between 0 - 1 and we map it to a range of 0 - 100, the number becomes 50.
          Another thing I am using is noise, it's is a great way of generating _ self-similar_ random numbers. These numbers are amazing for animation, as they create smooth yet unpredictable movement.
          </span>
         
        </styled.Description>
      </styled.TextContainer>
      <styled.FlexContainer>
        <styled.ImageContainer>
          <Sparkles>
          <Image
            src="v1624633658/about/bulb_vw9yyx.png"
            alt="portfolio demo"
            width={650}
            height={620}
          />
          </Sparkles>
        </styled.ImageContainer>
        <styled.TextContainer>
          <styled.SubTitle className="web-stack">
            Web Stack and Explanation
          </styled.SubTitle>
          <styled.Description>
            React made the most sense for the web application due to its
            simplicity and flexibility. Based on React, I choose Next.js as its
            framework. It offers: 3(CSR, SSR, SSG) rendering systems, Built-in
            Routing, and Image Optimization. These features make the app super
            fast as well as super easy to develop. Yet to be ported to NextJS though.
            Vercel is also an obvious choice for NextJs application deployment
              because of its speed and reliability.
           
          </styled.Description>
        </styled.TextContainer>
      </styled.FlexContainer>
      <styled.TextContainer>
        <styled.SubTitle>Problems and Thought Process</styled.SubTitle>
        <styled.Description>
          [TO BE UPDATED]
        </styled.Description>
      </styled.TextContainer>
      <styled.TextContainer>
        <styled.SubTitle>Lessons Learned</styled.SubTitle>
        <styled.Description>
         [TO BE UPDATED]
        </styled.Description>
      </styled.TextContainer>
    </styled.Portfolio>
  );
}
