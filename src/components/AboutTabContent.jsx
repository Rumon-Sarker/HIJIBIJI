import Image from 'next/image';
import React from 'react';
import tab1 from "./../../public/Swift_logo_svg 2.png";
import tab2 from "./../../public/ruby 2.png";
import tab3 from "./../../public/Python-Symbol 2.png";
import tab4 from "./../../public/php.png";
import tab5 from "./../../public/kotlin_jfif 2.png";
import tab6 from "./../../public/javascript-vector-logo-yellow-png-transparent-javascript-vector-12 2.png";
import tab7 from "./../../public/Java_programming_language_logo_svg 2.png";
import tab8 from "./../../public/c-sharp-c-logo-02F17714BA-seeklogo_com 2.png";


const AboutTabContent = () => {
    return (
        <div>
           <div>
            {/* tab content 1 */}
           <ul className="flex lg:flex-row lg:space-x-28 px-2 space-x-3 md:space-x-12 items-center">
                    <li><Image className="object-cover" width={50} height={50} src={tab1} alt=""/></li>
                    <li><Image className="object-cover" width={50} height={50} src={tab2} alt=""/></li>
                    <li><Image className="object-cover" width={50} height={50} src={tab3} alt=""/></li>
                    <li><Image className="object-cover" width={50} height={50} src={tab4} alt=""/></li>
                    <li><Image className="object-cover" width={50} height={50} src={tab5} alt=""/></li>
                    <li><Image className="object-cover" width={50} height={50} src={tab6} alt=""/></li>
                    <li><Image className="object-cover" width={50} height={50} src={tab7} alt=""/></li>
                    <li><Image className="object-cover" width={50} height={50} src={tab8} alt=""/></li>
                   </ul>
                   <ul className="flex lg:space-x-[121px] space-x-4 md:space-x-[57px] px-2 mt-5 mb-10">
                    <li>Swift</li>
                    <li>Ruby</li>
                    <li>Python</li>
                    <li>Php</li>
                    <li>Kotlin</li>
                    <li>JavaScript</li>
                    <li>Java</li>
                    <li>C#</li>
                   </ul>
           
            </div> 
        </div>
    );
};

export default AboutTabContent;