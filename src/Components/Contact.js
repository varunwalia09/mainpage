import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GitHubIcon from '@mui/icons-material/GitHub';
function Contact(){
    return(
        <div className='social'>
      <div className='social-icon'>
     
      <a className='linkedin' aria-label='Linkedin' href='https://www.linkedin.com/in/coder-varun-walia/' target='blank'><LinkedInIcon/></a>
      <a className='instagram' aria-label='Instagram' href='https://www.instagram.com/pb39hyper/' target='blank'><InstagramIcon/></a>
      <a className='youtube' aria-label='Youtube' href='https://www.youtube.com/@pb39Hyepr' target='blank'><YouTubeIcon/></a>
      <a className='github' aria-label='Github' href='https://github.com/varunwalia09' target='blank'><GitHubIcon/></a>
      </div>
      </div>
      
    )
}
export default Contact;