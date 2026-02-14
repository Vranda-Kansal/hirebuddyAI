
import Image from "next/image";
import FeatureCardButton from "@/app/_components/FeatureCardButton";
import {getFeatureRoute} from "@/app/_config/routes";

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
                    quality={85}
                />
            </div>
            <ul className="p-3">
                {
                    feature.points.map((bullet, i) => <li key={i}>✅ {bullet}</li>)
                }
            </ul>
            <FeatureCardButton buttonText={feature.buttonText} route={getFeatureRoute(feature.cardId)} />
        </div>
    )
}
