import FeatureCard from "@/app/_components/FeatureCard";
import ProjectTitle from "@/app/_components/ProjectTitle";
import DescriptionCard from "@/app/_components/DescriptionCard";
import Footer from "@/app/_components/Footer";
import connectDB from '@/lib/mongodb';
import mongoose from 'mongoose';
import Navbar from "@/app/_components/Navbar";


// ⭐ THIS MAGIC LINE: Cache for 1 hour (3600 seconds)
// First visit: shows loading.js skeleton immediately
// Subsequent visits: instant! (uses cached version)
export const revalidate = 3600;

export default async function Home() {
    await connectDB();

    const db = mongoose.connection.db;
    const collection = db.collection('homepage');
    const data = await collection.findOne({});
    // Destructure
    const {
        featureCards,
        mainHeading,
        mainHeadingTitle,
        offerCards,
        subheading,
        subheadingTitle,
        whatWeOfferHeading,
        logoUrl
    } = data;
    return (
        <section>
            <Navbar logoUrl={logoUrl}/>
            <ProjectTitle mainHeading={mainHeading} mainHeadingTitle={mainHeadingTitle} subheading={subheading}
                          subheadingTitle={subheadingTitle}/>
            <div className="w-full max-w-screen-xl mx-auto flex justify-evenly my-[3rem]">
                {
                    featureCards.map((feature) => {
                            return <FeatureCard key={feature.cardId} feature={feature}/>
                        }
                    )
                }
            </div>
            <section className="flex flex-col items-center w-full gap-[20px]">
                <h1 className="text-4xl font-bold">{whatWeOfferHeading}</h1>
                <div className="flex max-w-screen-xl gap-[1rem]">
                    {
                        offerCards.map((offer) => {
                            return <DescriptionCard key={offer.offerId} offer={offer} />
                        })
                    }
                </div>
            </section>
            <Footer logoUrl={logoUrl}/>
        </section>
    )
}
