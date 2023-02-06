import React from 'react'
import "../Sidebar/sidebar.css"
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PinterestIcon from '@mui/icons-material/Pinterest';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
export default function Sidebar() {
  return (
    <>
    <div className='sidebar'>
        <div className='sidebar1'>
          <span className='sidebarheading'><b>A little about me!!!!</b></span>
          <hr/>
          <img 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-ncY-heISk8kAf3J_MXmEi2Utnl0LsgsfQg&usqp=CAU"
          alt=""/>
          
            <p>Hello welcome to my blog.My name is Aswitha.
                I am from Kannyakumari but currently living in chennai. I am a FullStack Developer and a blogger.
               Hope you like my blog
 </p>
          
          

        </div>
        <div className='sidebarkey'>
        
          <span className='sidebarheading'><b>Categories</b></span>
          
<ul className='list'>
<li className='items'>life</li>
<li className='items'>cooking</li>
<li className='items'>sports</li>
<li className='items'>technology</li>
<li className='items'>movie</li>
<li className='items'>Music</li>
<li className='items'>pet</li>
<li className='items'>Architecture</li>
</ul>
        </div>
        <div className='sidebar1'>
          <span className='sidebarheading'><b>Lets's be friends</b></span></div>

    <div className='sidebaricon'>   
<i className='icons1'><FacebookIcon/></i>
<i className='icons2'><TwitterIcon/></i>
<i className='icons3'>< InstagramIcon/></i>
<i className='icons4'><YouTubeIcon /> </i>
<i className='icons5'><PinterestIcon /> </i>
<i className='icons4'><MailOutlineIcon /> </i>
</div>
    </div> 
    </>
  )
}
