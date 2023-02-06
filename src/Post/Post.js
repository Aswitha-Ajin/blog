import React from 'react'
import "../Post/post.css"

export default function Post() {
  return (
    <div className='postmain'>
    
     <img 
     className='postimg'
     src='https://mdbootstrap.com/img/Photos/Slides/img%20(35).webp' 
     alt=""
     />
     <div className='postheading'>
      <div className='postdetail'>
        <span className='posttype'>Music</span>
        <span className='posttype'>Life</span>
        </div>
        <span className='posttitle'>Music, art concerned with combining vocal or instrumental sounds .</span>
         <hr/>
         <span className='date'>1 hr ago</span>
        </div>
        <p className='postdata'>music, art concerned with combining vocal or instrumental sounds for beauty of form or emotional expression, usually according to cultural standards of rhythm, melody, and, in most Western music, harmony. Both the simple folk song and the complex electronic composition belong to the same activity, music.</p>
     </div>
  )
}
