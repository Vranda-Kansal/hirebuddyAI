// app/_components/FeatureCardButton.jsx
"use client"

import Link from 'next/link';

export default function FeatureCardButton({ buttonText, route }) {

    return (
        <Link
            href={route}
            className="bg-[#625df6] p-[0.5em] rounded-b-xl font-bold ring-1 ring-purple-500 inset-shadow-xs inset-shadow-purple-300 cursor-pointer hover:bg-[#7269f8] transition block text-center"
        >
            {buttonText}
        </Link>
    );
}
