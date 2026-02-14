import Image from "next/image";
import {Mail, Linkedin, Github, Youtube} from 'lucide-react';

export default function Footer({logoUrl}) {
    return (
        <footer>
            <div className="w-full max-w-screen-xl mx-auto">
                <div className="flex py-13 justify-between items-center">
                    <a className="basis-full">
                        <Image src={logoUrl} alt="logo Image" width={110} height={50}
                               className='object-contain cursor-pointer'/>
                    </a>
                    <span className="text-sm text-gray-500 basis-full flex justify-center">© 2026 <a
                        className="ms-1 hover:underline cursor-pointer"> hireBuddyAI</a>. All Rights Reserved</span>
                    <div className="flex basis-full text-gray-500 justify-end items-center">
                        <a className="cursor-pointer hover:text-white"><Mail className="w-5 h-5"/></a>
                        <a className="ms-5 cursor-pointer hover:text-white"><Linkedin className="w-5 h-5"/></a>
                        <a className="ms-5 cursor-pointer hover:text-white"><Youtube className="w-5 h-5"/></a>
                        <a className="ms-5 cursor-pointer hover:text-white"><Github className="w-5 h-5"/></a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
