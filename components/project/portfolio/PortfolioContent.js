import * as styled from './styles';
import Image from 'next/image';
import Sparkles from 'components/home/sparkle';
import React from "react"


class PortfolioContent extends React.Component  {
  

 
render(){
  return (
    
    <styled.Portfolio>
      
      
      <styled.TextContainer>
        <styled.Title>Portfolio</styled.Title>
        <styled.Description>
        
          The Portfolio is a production-ready, open-source portfolio of mine built with
          React, Next.js, and styled-component. It produces the
          experience of browsing smooth animations and minimal design by using reusable React hooks and
          components along with complex CSS and multiple API calls.{' '}
         
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
                <a href="">
                  <span className="link">Site</span>
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <span className="arrow">▹</span>Next.js
              </td>
              <td>
                <a href="https://github.com/">
                  <span className="link">Code</span>
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <span className="arrow">▹</span>Styled-Components
              </td>
              <td>
                <a href="">
                  <span className="link">Reddit</span>
                </a>
              </td>
            </tr>
          </tbody>
        </styled.Table>
      </styled.TextContainer>
      <styled.ImageContainer>
        <Image
          src="v1624633658/about/portfolio_uxlgnh.png"
          alt="hotflix demo"
          width={1266}
          height={720}
        />
      </styled.ImageContainer>
      <styled.TextContainer>
        <styled.SubTitle>Project Purpose and Goal</styled.SubTitle>
        <styled.Description>
          After few months of self-teaching, I decided to build a
          comprehensive project without help from tutorials. The first idea that
          came into my mind was designing my own portfolio. I'm familiar with UI and UX, as well as all the basic
          functionalities that any portfolio website possesses. Wouldn't it be so cool if I could make my own
          Portfolio?{' '}
          <span>
          With Next, you have a few different options when it comes to page rendering: you can choose to do it “on-demand” 
          (server-side rendering) or ahead of time (static site generation). I've opted to build all the blog posts ahead of time, 
          when the site is generated.
          </span>
          <span>
          I deploy this blog on Vercel. I initially chose them because they're the company behind Next.js, and I figured it would be well-optimized. Honestly, their platform is awesome. I wound up moving some of my non-Next projects there as well.
          </span>
        </styled.Description>
      </styled.TextContainer>
      <styled.FlexContainer>
        <styled.ImageContainer>
          <Sparkles>
          <Image
            src="v1624633658/about/Removal-285_auto_x2_a5hcj0.png"
            alt="portfolio demo"
            width={800}
            height={720}
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
            fast as well as super easy to develop.
            <span>
              Vercel is also an obvious choice for NextJs application deployment
              because of its speed and reliability.
              Initially, I deployed it to Netlify with custom domain but 'Next/Image' crashed badly!<br/>
              On running `next export` while using `next/image`, the following error occurs:<br/>
              Error: Image Optimisation using Next.js’ default loader is not compatible with `next export`.<br/>
              This is because Image Component uses a proxy server (provided by Vercel) that optimises images on-demand, as and when users request them.
              I solved this by using Next-On-Netlify Package and Using Cloudinary as Default Loader! 

 
            </span>
          </styled.Description>
        </styled.TextContainer>
      </styled.FlexContainer>
      <styled.TextContainer>
        <styled.SubTitle>Problems and Thought Process</styled.SubTitle>
        <styled.Description>

     
          Like most projects, I ran into a few bumps along the way, one
          particularly difficult area was compiling the Serverless Framework.
          I spent a days trying to figure out how to compile the images. I searched
          on Google, StackOverflow, tech blogs, and even Reddit but got nothing.{' '}
          
          <span>
            Taking a simple example, let's say I am compiling a basic image <i>`foo.jpg`</i> to serverless production!
            The image URL was changed from <i>`/foo.jpg to`</i> <i>`/_next/image?url=%2Ffoo.jpg&w=750&q=75`</i>.<br/>
            
            <i>`/_next/image`</i> — this is an endpoint where the image will be sent for processing.<br/>
            <i>`?url=/foo.jpg`</i> — where the endpoint should load the image from.<br/>
            <i>`&w=750`</i> — resize the image to 750px wide.<br/>
            <i>`&q=75`</i> — resample the image at 75% quality to reduce the file size.<br/>
            This proxy URL is unique and thus can be cached, preventing redundant image optimizations. 
            The default loader relies on the Image Optimisation API, which is unavailable for exported-applications, 
            for Next.js tunes images on-demand, as users request them (not at build time).
            </span>
            <span>
            Here, I have a list of solutions tot ackle this issue:
use next start, which starts the Image Optimisation API. This would need a physical or cloud server, rendering you responsible for its management and monitoring.<br/>
use Vercel for deploying, which supports Image Optimisation.<br/>
use the solution provided by the next-on-netlify package.<br/>
configure a third-party loader in next.config.js. (e.g., Cloudinary, Akamai and so forth)<br/>
I used a simple Image Optimiser provided to us by the package next-on-netlify which uses jimp under the hood. But that is just a plain API, not performant enough as against the one provided by Vercel. Therefore, we will apply Cloudinary as the default loader, being compatible with Netlify and other hosting platforms.<br/>
Finally, I implemented the last option considering the webpage rendering speed!
            </span>
        </styled.Description>
       
      </styled.TextContainer>
      <styled.TextContainer>
        <styled.SubTitle>Lessons Learned</styled.SubTitle>
        <styled.Description>
          As my first large project using React and Next.Js, I learned a lot of
          lessons regarding React hooks and state management.{' '}
          <span>
            When I first began, I would write sloppy code and move on, but now I
            know how doing so can come back to bite you; I now spend a lot more
            time refactoring and improving every line I write, for the best
            readability and far fewer headaches.
          </span>
        </styled.Description>
      </styled.TextContainer>
    </styled.Portfolio>
  );
}
}
export default PortfolioContent;
