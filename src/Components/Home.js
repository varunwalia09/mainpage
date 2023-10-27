import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GitHubIcon from '@mui/icons-material/GitHub';

function Home() {
  return (
    <div className='home'>
     
     
      <div className='nxjimage'>
      <a href="https://en.wikipedia.org/wiki/JavaScript" target='blank'>
      <img
        src="/assests/nxj.jpg"
        alt="nxj.jpg"
      />
      </a>
      <div className='jsimage'>
      <a href="https://en.wikipedia.org/wiki/JavaScript" target='blank'>
      <img
        src="/assests/js.jpg"
        alt="js.jpg"
      />
      </a>
      <div className='rsimage'>
      <a href="https://react.dev/" target='blank'>
      <img
        src="/assests/rs.jpg"
        alt="rs.jpg"
      />
      </a>
    </div>
      <div className='nsimage'>
      <a href="https://en.wikipedia.org/wiki/Node.js" target='blank'>
      <img
        src="/assests/ns.jpg"
        alt="ns.jpg"
      />
      </a>
      <footer className='footer' >
      <p><b>Copyright 2023 All Right Reserved</b><br/></p>
      <p><b>Create By Varun Walia</b></p>
      </footer>
      
    </div>
    </div>
      </div>
    </div>
    
  );
}

export default Home;
