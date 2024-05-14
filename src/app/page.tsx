import Image from "next/image";
import LogoContainer from "@/components/logo";
import JoinButton from "@/components/join-button";
import Menu from "@/components/menu";
import {MenuItems} from "@/constants/menuItems";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-2">
      <div className="z-10 w-full max-w-5xl bg-green-50 rounded-xl lg:p-4 p-2">
        <div className="flex flex-row-reverse lg:flex-row justify-between items-center w-full">
          <LogoContainer />
          <Menu menu_items={MenuItems} />
          <div>
            <JoinButton />
          </div>
        </div>

      {/*  welcome section */}
        <section className="lg:p-24 p-12 flex justify-between items-center">
          <div className="flex flex-col gap-8">
            <div className="text-4xl font-medium">
              <h3>Get Best</h3>
              <h3>Quality <span className="text-green-500">Fertilizers</span> & <span className="text-green-500">Seeds.</span></h3>
            </div>
            <p className="text-gray-600 w-full lg:w-7/12">
              Here you find the finest fertilizers and seeds for their fields.
              Let's grow together!
            </p>
            <div>
              <button className="btn">View more</button>
            </div>
          </div>
          <div className="relative z-[-1] hidden lg:flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
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
      </div>
    </main>
  );
}
