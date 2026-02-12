import Image from "next/image";
import {CircleUser, Sun} from 'lucide-react';

export default function Navbar() {
    return (
        <header>
            <div className="max-w-screen-xl h-14 px-6 py-2 my-2 flex items-center justify-between mx-auto">

                <div className="relative h-8 w-24 sm:w-28 md:w-38 cursor-pointer">
                    <Image
                        src="/logo.png"
                        alt="HireBuddyAI logo"
                        fill
                        className="object-contain"
                        priority
                    />
                </div>
                <div className="flex items-center gap-4">
                    <CircleUser size={26}
                                className="
                            text-white
                            hover:scale-110
                            cursor-pointer
                            transition-all
                            duration-200
                          "
                    />


                    <Sun size={26}
                         className="text-gray-400 hover:text-white cursor-pointer transition-colors duration-200"/>
                </div>
            </div>
        </header>
    );
}



