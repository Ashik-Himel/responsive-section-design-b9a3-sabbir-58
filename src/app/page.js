import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import line from "@/assets/line.png";
import building from "@/assets/building.png";
import house from "@/assets/house-icon.png";
import sectionImg from "@/assets/section-image.png";

export default function Home() {
  return (
    <main>
      <section className="bg-gray-100 py-16">
        <div className="container flex flex-col lg:flex-row justify-center lg:items-center gap-8">
          <div className="flex-1">
            <Image
              src={line}
              alt="Line Vector"
              className="hidden lg:block w-[120px] relative -left-[30px] -top-[30px]"
            />
            <span className="bg-white px-4 py-2 rounded-full inline-flex justify-center items-center gap-2 mb-4">
              <FaArrowRightLong />
              About Us
            </span>
            <h2 className="text-4xl font-bold leading-[1.2] mb-6">We design thoughtful, liveable spaces</h2>
            <p className="mb-4">The barn house captivates with its blend of rustic charm and modern sophistication, featuring weathered wood, sleek metal accents.</p>
            <div className="flex flex-col sm:flex-row lg:flex-col gap-4">
              <div className="bg-white p-4 rounded-lg flex justify-center items-center gap-4">
                <div>
                  <Image
                    src={building}
                    alt="Building Icon"
                    className="w-[120px]"
                  />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Commercial</h4>
                  <p>The barn house captivates with its blend of rustic charm and modern.</p>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg flex justify-center items-center gap-4">
                <div>
                  <Image
                    src={house}
                    alt="House Icon"
                    className="w-[120px]"
                  />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Residential</h4>
                  <p>The barn house captivates with its blend of rustic charm and modern.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <Image
              src={sectionImg}
              alt="Section Image"
              className="w-full aspect-video lg:aspect-auto xl:max-w-[500px] xl:mx-auto"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
