import React from 'react';

export default function Header() {
    return (
        
           <nav className="bg-[#F5F4FF] w-full">
                <div className="container mx-auto px-12 py-3 flex justify-between items-center">
                    <div className="font-caprasimo text-5xl leading-[55.05px] font-normal">
                        Bright
                    </div>
                    <ul className="font-caprasimo flex space-x-28">
                        <li className="text-darkBlue text-[26px]">Home</li>
                        <li className="text-darkBlue text-[26px]">Courses</li>
                        <li className="text-darkBlue text-[26px]">Mentors</li>
                        <li className="px-3 text-darkBlue text-[26px]  rounded-none relative">
                        <button className="relative w-40 h-12 py-1 px-3 border border-black text-black font-semibold bg-white">
                            <span className="absolute inset-0 border border-black transform -translate-x-1 translate-y-1 bg-[#a19ef7] z-0"></span>
                            <span className="absolute inset-0 border border-black bg-white z-10"></span>
                            <span className="relative z-20 font-caprasimo text-[26px] font-normal">Login</span>
                        </button>

                    </li>
                    </ul>  
                </div>
                
            </nav>
          
        
    );
}