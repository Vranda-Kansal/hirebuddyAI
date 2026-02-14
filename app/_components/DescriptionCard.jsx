import Image from "next/image";

export default function DescriptionCard({offer}) {
    return (
        <ul className="bg-[#1f2937] text-white font-medium font-mono rounded-xl flex-1 p-3 flex flex-col justify-center gap-2 min-h-[220px] shadow-[8px_0_0px_#625df6]
">
            {
                offer.bulletPoints.map((eachpoint, i) => <li key={i}>{eachpoint}</li>)
            }
        </ul>
    )
}
