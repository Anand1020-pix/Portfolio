import React from "react";
import gmail from "../../Assets/Gmail.png";
import github from "../../Assets/github.png";
import linkedin from "../../Assets/linkedin.png";

function Contact() {
  return (
<div class="  text-center block w-full h-full p-10 bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700" >
    
<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white  pb-4">Contact Me</h5>
<div className="mr-10 flex gap-10 justify-center"> 
 
<a href="mailto: anandmadhavan10201@gmail.com">
  <img src={gmail} alt="Gmail" style={{ width: '60px', height: '60px' }} />
</a>  
<a href="https://github.com/Anand1020-pix" >
<img src={github} alt="GitHub" style={{ width: '60px', height: '60px' }}/>
</a>   
<a href="https://www.linkedin.com/in/anand-m-202b651b3/">
    <img src={linkedin} alt="LinkedIn"style={{ width: '70px', height: '60px' }} />
    </a>
    </div>
     </div>
  );
}

export default Contact;


<div >
    
  </div>