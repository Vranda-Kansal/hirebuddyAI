// app/loading.js
export default function Loading() {
    return (
        <div className="min-h-screen">
            {/* Navbar Skeleton */}
            <div className="w-full backdrop-blur-md sticky top-0 z-1">
                <div className="flex h-[5rem] justify-between items-center mx-auto max-w-screen-xl px-4">
                    {/* Logo skeleton */}
                    <div className="w-[12%] h-[50%] bg-gray-700 rounded animate-pulse"></div>

                    {/* Icons skeleton */}
                    <div className="flex gap-3">
                        <div className="w-[30px] h-[30px] bg-gray-700 rounded-full animate-pulse"></div>
                        <div className="w-[30px] h-[30px] bg-gray-700 rounded-full animate-pulse"></div>
                    </div>
                </div>
            </div>

            {/* Project Title Skeleton */}
            <div className="flex flex-col items-center text-4xl font-bold min-h-[100px] justify-between text-center mt-8">
                <div className="h-10 bg-gray-700 rounded w-[400px] mb-4 animate-pulse"></div>
                <div className="h-10 bg-gray-700 rounded w-[250px] animate-pulse"></div>
            </div>

            {/* Feature Cards Skeleton */}
            <div className="w-full max-w-screen-xl mx-auto flex justify-evenly my-[3rem] px-4 gap-4">
                {/* Card 1 */}
                <div className="bg-[#1f2937] flex flex-col max-w-md rounded-xl shadow-[0_0_40px_rgba(255,255,255,0.3)] flex-1">
                    {/* Image skeleton */}
                    <div className="w-full h-64 bg-gray-700 rounded-t-xl animate-pulse"></div>

                    {/* List items skeleton */}
                    <div className="p-3 space-y-2">
                        <div className="h-4 bg-gray-700 rounded animate-pulse"></div>
                        <div className="h-4 bg-gray-700 rounded animate-pulse"></div>
                        <div className="h-4 bg-gray-700 rounded w-4/5 animate-pulse"></div>
                    </div>

                    {/* Button skeleton */}
                    <div className="h-10 bg-gray-700 rounded-b-xl animate-pulse"></div>
                </div>

                {/* Card 2 */}
                <div className="bg-[#1f2937] flex flex-col max-w-md rounded-xl shadow-[0_0_40px_rgba(255,255,255,0.3)] flex-1">
                    <div className="w-full h-64 bg-gray-700 rounded-t-xl animate-pulse"></div>
                    <div className="p-3 space-y-2">
                        <div className="h-4 bg-gray-700 rounded animate-pulse"></div>
                        <div className="h-4 bg-gray-700 rounded animate-pulse"></div>
                        <div className="h-4 bg-gray-700 rounded w-4/5 animate-pulse"></div>
                    </div>
                    <div className="h-10 bg-gray-700 rounded-b-xl animate-pulse"></div>
                </div>
            </div>

            {/* "What We Offer" Section Skeleton */}
            <section className="flex flex-col items-center w-full gap-[20px] px-4">
                {/* Heading skeleton */}
                <div className="h-10 bg-gray-700 rounded w-[300px] animate-pulse"></div>

                {/* Offer cards skeleton */}
                <div className="flex max-w-screen-xl gap-[1rem] w-full">
                    {/* Offer Card 1 */}
                    <div
                        className="bg-[#1f2937] rounded-xl flex-1 p-3 flex flex-col justify-center gap-2 min-h-[220px] shadow-[8px_0_0px_#625df6]">
                        <div className="h-4 bg-gray-700 rounded animate-pulse"></div>
                        <div className="h-4 bg-gray-700 rounded animate-pulse"></div>
                        <div className="h-4 bg-gray-700 rounded w-4/5 animate-pulse"></div>
                        <div className="h-4 bg-gray-700 rounded animate-pulse"></div>
                    </div>

                    {/* Offer Card 2 */}
                    <div
                        className="bg-[#1f2937] rounded-xl flex-1 p-3 flex flex-col justify-center gap-2 min-h-[220px] shadow-[8px_0_0px_#625df6]">
                        <div className="h-4 bg-gray-700 rounded animate-pulse"></div>
                        <div className="h-4 bg-gray-700 rounded animate-pulse"></div>
                        <div className="h-4 bg-gray-700 rounded w-4/5 animate-pulse"></div>
                        <div className="h-4 bg-gray-700 rounded animate-pulse"></div>
                    </div>
                    <div
                        className="bg-[#1f2937] rounded-xl flex-1 p-3 flex flex-col justify-center gap-2 min-h-[220px] shadow-[8px_0_0px_#625df6]">
                        <div className="h-4 bg-gray-700 rounded animate-pulse"></div>
                        <div className="h-4 bg-gray-700 rounded animate-pulse"></div>
                        <div className="h-4 bg-gray-700 rounded w-4/5 animate-pulse"></div>
                        <div className="h-4 bg-gray-700 rounded animate-pulse"></div>
                    </div>
                </div>
            </section>

            {/* Footer Skeleton */}
            <footer className="mt-16">
                <div className="w-full max-w-screen-xl mx-auto px-4">
                    <div className="flex py-13 justify-between items-center">
                        {/* Logo skeleton */}
                        <div className="basis-full">
                            <div className="w-[110px] h-[50px] bg-gray-700 rounded animate-pulse"></div>
                        </div>

                        {/* Copyright text skeleton */}
                        <div className="basis-full flex justify-center">
                            <div className="h-4 bg-gray-700 rounded w-[250px] animate-pulse"></div>
                        </div>

                        {/* Social icons skeleton */}
                        <div className="flex basis-full justify-end items-center gap-5">
                            <div className="w-5 h-5 bg-gray-700 rounded-full animate-pulse"></div>
                            <div className="w-5 h-5 bg-gray-700 rounded-full animate-pulse"></div>
                            <div className="w-5 h-5 bg-gray-700 rounded-full animate-pulse"></div>
                            <div className="w-5 h-5 bg-gray-700 rounded-full animate-pulse"></div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
