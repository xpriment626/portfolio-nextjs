import Head from "next/head";
import CubeContent from "./components/cube-content.component";
import { useRouter } from "next/router";

export default function Home() {
    const route = useRouter();
    return (
        <div className="flex justify-center align-middle">
            <div className="grid grid-rows-2 grid-cols-1">
                <div
                    className="text-white bg-black pt-15 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 hover:shadow-black hover:shadow-xl"
                    style={{ width: 516, height: 500 }}
                >
                    <div className="p-5 grid grid-cols-2">
                        <div>
                            <img
                                src="/files/profile.JPG"
                                alt="my pic"
                                height={200}
                                width={200}
                            />
                            <div className="pt-3">
                                <a href="/files/Emmett_CV.pdf">
                                    <button
                                        className="h-10 px-6 font-semibold rounded-md bg-white text-black hover:bg-transparent hover:text-white hover:text-bold hover:border-2 hover:border-white"
                                        style={{ width: 200 }}
                                    >
                                        CV
                                    </button>
                                </a>
                            </div>
                            <div className="pt-3">
                                <a href="/files/Emmett_CV.zip">
                                    <button
                                        className="h-10 px-6 font-semibold rounded-md bg-white text-black hover:bg-transparent hover:text-white hover:text-bold hover:border-2 hover:border-white"
                                        style={{ width: 200 }}
                                    >
                                        Download CV
                                    </button>
                                </a>
                            </div>
                        </div>
                        <div>
                            <h1 className="text-2xl">
                                {"Let's Keep It Simple!"}
                            </h1>
                            <br />
                            <h1 className="font-bold">
                                Key Developer Skills:
                                <ul className="list-disc pl-5 pt-2">
                                    <li>Solidity</li>
                                    <li>Javascript</li>
                                    <li>Hardhat/Truffle</li>
                                    <li>NextJS</li>
                                    <li>TailwindCSS</li>
                                    <li>Alchemy/Moralis/Infura</li>
                                </ul>
                            </h1>
                            <br />
                            <h1 className="font-bold">
                                Interdepartmental Skills:
                                <ul className="list-disc pl-5 pt-2">
                                    <li>
                                        Digital Marketing (Email, Social Media,
                                        Facebook Ads)
                                    </li>
                                    <li>Copyediting</li>
                                    <li>Persuasive Writing</li>
                                    <li>Public Speaking</li>
                                    <li>Financial Market Literacy</li>
                                    <li>Brand Building</li>
                                </ul>
                            </h1>
                        </div>
                    </div>
                </div>
                <div className="pb-5">
                    <CubeContent />
                </div>
            </div>
        </div>
    );
}
