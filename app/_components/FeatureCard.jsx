
import Image from "next/image";

export default function FeatureCard({feature}) {
    return (
        <div
            className="bg-[#1f2937] text-white font-medium font-mono flex flex-col max-w-md rounded-xl hover:ring-3 hover:ring-purple-500 shadow-[0_0_40px_rgba(255,255,255,0.3)]">

            <div className="relative w-auto h-62 rounded-xl">
                <Image
                    src={feature.image}
                    alt="feature pic"
                    fill
                    className="rounded-t-xl shadow-md shadow-gray-600"
                />
            </div>
            <ul className="p-3">
                {
                    feature.points.map((bullet, i) => <li key={i}>✅ {bullet}</li>)
                }
            </ul>
            <button
                className="bg-[#625df6] p-[0.5em] rounded-b-xl font-bold ring-1 ring-purple-500 inset-shadow-xs inset-shadow-purple-300 cursor-pointer">{feature.buttonText}
            </button>
        </div>
    )
}
