import FeatureCard from "@/app/_components/FeatureCard";

export default function Home() {
    return (
        <div>
            <div className="w-full flex justify-evenly my-[3rem]">
                <FeatureCard/>
                <FeatureCard/>
            </div>
        </div>
    )
}
