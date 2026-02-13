import FeatureCard from "@/app/_components/FeatureCard";
import ProjectTitle from "@/app/_components/ProjectTitle";
import DescriptionCard from "@/app/_components/DescriptionCard";
import Footer from "@/app/_components/Footer";

export default function Home() {
    return (
        <section>
            <ProjectTitle/>
            <div className="w-full max-w-screen-xl mx-auto flex justify-evenly my-[3rem]">
                <FeatureCard/>
                <FeatureCard/>
            </div>
            <section className="flex flex-col items-center w-full gap-[20px]">
                <h1 className="text-4xl font-bold">What We Offer?</h1>
                <div className="flex max-w-screen-xl gap-[1rem]">
                    <DescriptionCard/>
                    <DescriptionCard/>
                    <DescriptionCard/>
                </div>
            </section>
            <Footer/>
        </section>
    )
}
