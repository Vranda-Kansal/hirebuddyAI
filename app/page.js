import FeatureCard from "@/app/_components/FeatureCard";
import ProjectTitle from "@/app/_components/ProjectTitle";

export default function Home() {
    return (
        <div>
            <ProjectTitle/>
            <div className="w-full flex justify-evenly my-[3rem]">
                <FeatureCard/>
                <FeatureCard/>
            </div>
        </div>
    )
}
