import Image from "next/image";
import {CircleUser, Sun} from 'lucide-react';

export default function Navbar({logoUrl}) {
    return (
        <div className="w-full backdrop-blur-md sticky top-0 z-1">
            <div className="flex h-[5rem] justify-between items-center mx-auto max-w-screen-xl">
                <div className="relative w-[12%] h-[50%]">
                    <Image src={logoUrl} alt="logo Image" fill className='object-contain cursor-pointer'/>
                </div>
                <div className="flex gap-3">
                    <CircleUser size={30} className="text-white cursor-pointer hover:scale-105 transition-all duration-200"/>
                    <Sun size={30} className="text-gray-400 hover:text-white cursor-pointer transition-colors duration-200"/>
                </div>
            </div>
        </div>
    )
}
