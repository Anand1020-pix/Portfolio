import React from "react";
import gmail from "../../Assets/Gmail.png";
import github from "../../Assets/github.png";
import linkedin from "../../Assets/linkedin.png";
function Contact() {
  return (

    
<a  class=" text-center block w-full  p-10 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white  pb-4">Contact Me</h5>
<div className="grid grid-cols-3 md:grid-cols-5 gap-4 px-10 items-center pr-5 " >
<a href="mailto: anandmadhavan10201@gmail.com"><img src={gmail}   alt="Gmail" /></a>
      
      <a href="https://github.com/Anand1020-pix" target="_blank" rel="noopener noreferrer">
      <img src={github} alt="GitHub" />
      </a>
      <a href="https://www.linkedin.com/in/anand-m-202b651b3/" target="_blank" rel="noopener noreferrer">
      <img src={linkedin} alt="LinkedIn" />
      </a>
     </div>
</a>
     
  );
}

export default Contact;