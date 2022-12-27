import Head from "next/head";
import Image from "next/image";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillInstagram,
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import deved from "../public/dev-ed-wave.png";
import code from "../public/code.png";
import design from "../public/design.png";
import consulting from "../public/consulting.png";
import laser from "../public/laser.jpg";
import web3ducation from "../public/web3ducation.png";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import kaveguilddiscord from "../public/kaveguilddiscord.png"
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";
import p1 from "../public/p1.jpg";
import p2 from "../public/p2.jpg";
import p3 from "../public/p3.jpg";
import p4 from "../public/p4.jpg";
import p5 from "../public/p5.jpg";
import p6 from "../public/p6.jpg";
import p7 from "../public/p7.jpg";
import p8 from "../public/p8.jpg";
import p9 from "../public/p9.jpg";
import p10 from "../public/p10.jpg";
import p11 from "../public/p11.jpg";
import p12 from "../public/p12.jpg";
import p13 from "../public/p13.jpg";
import cointelegraph from "../public/cointelegraph.jpg";
import p14 from "../public/p14.jpg";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Mark Manansala | Web3 Developer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl">manansala.eth</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="https://wa.me/639153530821"
                >
                  Let&apos;s be fren!
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl " >
              Mark Manansala
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Senior Full Stack Web3 Developer
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              10 Years experience as a Dev, entered Blockchain in 2017 and based in Dubai!
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <a href="https://twitter.com/0xManansala"><AiFillTwitterCircle /></a>
              <a href="https://www.linkedin.com/in/davegala09/"><AiFillLinkedin /></a>
              <a href="https://www.instagram.com/0xmanansala/"><AiFillInstagram /></a>
            </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image src={laser} layout="fill" objectFit="cover" alt="mark manansala" />
            </div>
          </div>
        </section>
        <section>

          <div>
            <h3 className="text-3xl py-1 dark:text-white ">About Me:</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Started coding since 2012, this marks my 10th year as a Dev.
              I&apos;ve been in the WEB3 space for 6 years now, I have the expertise to assist businesses with the development of their custom Smart Contracts, DApps, DeFi, NFT Marketplace/Collection and much more. Along with that, I also founded our own Academy, which is dedicated to producing more Web3 Developers. On the other hand, I also provide some blockchain consulting and advice to a number of blockchain/crypto companies. I was frequently asked to speak at various blockchain conferences and am fervently committed to educating people about cryptocurrencies and blockchain technology.

            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including blockchain development, marketing and teaching.
            </p>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Stuff I do:</h3>

          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <Image src={design} width={100} height={100} alt="mark manansala" />
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                Marketing
              </h3>
              <p className="py-2">I can assist you in promoting your project with robust web3 marketing solutions to generate awareness within the community and attract investors.
              </p>
              <h4 className="py-4 text-teal-600">I can provide</h4>
              <p className="text-gray-800 py-1">Community Managers</p>
              <p className="text-gray-800 py-1">Marketing Materials</p>
              <p className="text-gray-800 py-1">Social Media Marketing</p>
              <p className="text-gray-800 py-1">A lot more...</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={code} width={100} height={100} alt="mark manansala" />
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                #BUIDL
              </h3>
              <p className="py-2">
                Are you looking for someone to make your idea into reality? Let&apos;s do this!
              </p>
              <h4 className="py-4 text-teal-600">Top Skills</h4>
              <p className="text-gray-800 py-1">Most Web3 libraries</p>
              <p className="text-gray-800 py-1">Can build on any EVM</p>
              <p className="text-gray-800 py-1">Frontend</p>
              <p className="text-gray-800 py-1">Backend</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={consulting} width={100} height={100} alt="mark manansala" />
              <h3 className="text-lg font-medium pt-8 pb-2 ">Consulting</h3>
              <p className="py-2">
                Looking for a Web3 Expert? I can help you in every step of the way!
              </p>
              <h4 className="py-4 text-teal-600">I&apos;m an expert in</h4>
              <p className="text-gray-800 py-1">Project Management</p>
              <p className="text-gray-800 py-1">Blockchain Protocols</p>
              <p className="text-gray-800 py-1">Community Building</p>
              <p className="text-gray-800 py-1">Marketing</p>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Places I&apos;ve been:</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">

              BLOCKCHAIN CONFERENCES AND TALK SHOWS <br></br>
              THAILAND - PHILIPPINES - VIETNAM - INDONESIA - SINGAPORE - DUBAI
            </p>
          </div>
          <div className="grid grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-4">
            <div className="sddd">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                alt="mark manansala"
                height={"100%"}
                layout="responsive"
                src={p1}
              />
            </div>
            <div className="sddd">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                alt="mark manansala"
                height={"100%"}
                layout="responsive"
                src={p2}
              />
            </div>
            <div className="sddd">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                alt="mark manansala"
                height={"100%"}
                layout="responsive"
                src={p3}
              />
            </div>
            <div className="sddd">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                alt="mark manansala"
                height={"100%"}
                layout="responsive"
                src={p4}
              />
            </div>
            <div className="sddd">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                alt="mark manansala"
                height={"100%"}
                layout="responsive"
                src={p5}
              />
            </div>
            <div className="sddd">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                alt="mark manansala"
                height={"100%"}
                layout="responsive"
                src={p6}
              />
            </div>
            <div className="sddd">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                alt="mark manansala"
                height={"100%"}
                layout="responsive"
                src={p7}
              />
            </div>
            <div className="sddd">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                alt="mark manansala"
                height={"100%"}
                layout="responsive"
                src={p8}
              />
            </div>
            <div className="sddd">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                alt="mark manansala"
                height={"100%"}
                layout="responsive"
                src={p9}
              />
            </div>
            <div className="sddd">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                alt="mark manansala"
                height={"100%"}
                layout="responsive"
                src={p10}
              />
            </div>
            <div className="sddd">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                alt="mark manansala"
                height={"100%"}
                layout="responsive"
                src={p11}
              />
            </div>
            <div className="sddd">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                alt="mark manansala"
                height={"100%"}
                layout="responsive"
                src={p12}
              />
            </div>
          </div>
        </section>

        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Where I got recently featured:</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">


            </p>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-1 sm:grid-cols-1 gap-4">

            <div className="sddd">

              <video class="testgame" muted autoPlay loop width="100%">
                <source src={"https://markdavemanansala.github.io/images/superverse.mp4"} type="video/mp4" />
              </video>
            </div>

            <div>
              <iframe class="testgame" width="100%" height="100%" src="https://www.youtube.com/embed/Ry3ggJCK3Gg"
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
            </div>
            <div>
              <a
                href="https://cointelegraph.com/news/turning-losses-to-wins-how-a-ponzi-victim-became-a-crypto-evangelist">
                <Image
                  className="rounded-lg object-cover"
                  width={"100%"}
                  alt="mark manansala"
                  height={"100%"}
                  layout="responsive"
                  src={cointelegraph}
                /></a>

              {/* <a
                href="https://cointelegraph.com/news/turning-losses-to-wins-how-a-ponzi-victim-became-a-crypto-evangelist">
                <img class="testgame"
                  src="https://images.cointelegraph.com/images/1174_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS91cGxvYWRzLzIwMjItMDMvNzIwODA3NGQtZjU5NC00MzNlLThlN2ItNmI0NTYwN2M4ZDY4LmpwZw==.jpg"
                  width="100%" height="100%" /></a> */}
            </div>
          </div>
        </section>


        <section className="py-10">

          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Things I&apos;m working on lately ...</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">


            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                alt="mark manansala"
                height={"100%"}
                layout="responsive"
                src={web3ducation}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                alt="mark manansala"
                height={"100%"}
                layout="responsive"
                src={kaveguilddiscord}
              />
            </div>
            {/* <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                                  width={"100%"}
                  alt="mark manansala"
                height={"100%"}
                layout="responsive"
                src={web3}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                                  width={"100%"}
                  alt="mark manansala"
                height={"100%"}
                layout="responsive"
                src={web4}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                                  width={"100%"}
                  alt="mark manansala"
                height={"100%"}
                layout="responsive"
                src={web5}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                                  width={"100%"}
                  alt="mark manansala"
                height={"100%"}
                layout="responsive"
                src={web6}
              />
            </div> */}
          </div>
        </section>
      </main>
    </div>
  );
}
