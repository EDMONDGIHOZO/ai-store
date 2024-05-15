import Image from "next/image";
import Wrapper from "@/components/wrapper";
import React from "react";
import FeaturedProducts from "@/components/featured-products";

export default function Home() {
    return (
        <Wrapper>
            {/*  welcome section */}
            <section className="lg:py-24 flex justify-between items-center">
                <div className="flex flex-col gap-8">
                    <div className="text-4xl font-medium">
                        <h3>Get Best</h3>
                        <h3>Quality <span className="text-green-500">Fertilizers</span> & <span
                            className="text-green-500">Seeds.</span></h3>
                    </div>
                    <p className="text-gray-600 w-full lg:w-7/12">
                        Here you find the finest fertilizers and seeds for their fields.
                        Let's grow together!
                    </p>
                    <div>
                        <a href="/about">
                            <button className="btn">View more</button>
                        </a>
                    </div>
                </div>
                <div
                    className="relative z-[-1] hidden lg:flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
                    <Image
                        className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                        src="/aistoreart.svg"
                        alt="Leaves"
                        width={180}
                        height={37}
                        priority
                    />
                </div>
            </section>
            <section className={"flex justify-center items-center flex-col"}>
                <FeaturedProducts product_type={"Fertilizers"}/>
                <FeaturedProducts product_type={"Seeds"}/>
            </section>

            <div className={"my-10 bg-green-100 py-20 rounded-2xl"}>
                <div className={"flex justify-center items-center flex-col lg:flex-row px-10 items-start gap-12 py-10"}>
                    <Image
                        className="relative rounded-2xl dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert rotate-24"
                        src="/seeds.png"
                        alt="Leaves"
                        width={280}
                        height={67}
                        priority
                    />

                    <div className={"lg:w-5/12"}>
                        <h3 className={"font-medium text-2xl mb-10"}>Why <span
                            className={"text-green-400"}>Us</span></h3>
                        <p>
                            Choosing our store means choosing quality, reliability, and support
                            for your farming needs. With a carefully curated selection
                            of fertilizers and seeds, we ensure that every product meets
                            the highest standards, empowering you to cultivate thriving crops.
                            Experience the difference in yield, efficiency,
                            and sustainability with our trusted solutions.
                            Join us in nurturing the future of agriculture.
                        </p>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
}
