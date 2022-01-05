export default function Projects() {
    return (
        <div className="pb-2">
            <div class="max-w-md mx-auto bg-black rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                <div class="md:flex">
                    <div class="md:shrink-0">
                        <img
                            class="h-48 w-full object-cover md:h-full md:w-48"
                            src="/static/certificate.PNG"
                            alt="Man looking at item at a store"
                        />
                    </div>
                    <div class="p-8">
                        <div class="uppercase tracking-wide text-2xl text-purple-700 font-semibold pb-1 flex justify-center">
                            Project 00 - FinTech Webinar
                        </div>
                        <a
                            href="https://www.facebook.com/officialenvisageph"
                            class="block mt-1 text-lg leading-tight font-medium text-white hover:underline"
                        >
                            View Org Page
                        </a>
                        <p class="mt-2 text-white">
                            I partnered with a newly created youth organisation
                            to host the first "Intro to Web3 and Solidity"
                            webinar in the country.
                        </p>
                    </div>
                </div>
            </div>
            <div className="pt-2">
                <div class="max-w-md mx-auto bg-black rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                    <div class="md:flex">
                        <div class="md:shrink-0">
                            <img
                                class="h-48 w-full object-cover md:h-full md:w-48"
                                src="/static/market.png"
                                alt="Man looking at item at a store"
                            />
                        </div>
                        <div class="p-8">
                            <div class="uppercase tracking-wide text-2xl text-purple-700 font-semibold pb-1 flex justify-center">
                                Project 01 - NFT Marketplace
                            </div>
                            <a
                                href="https://polygon-testnet-marketplace.vercel.app/create-nft"
                                class="block mt-1 text-lg leading-tight font-medium text-white hover:underline"
                            >
                                View Site
                            </a>
                            <a
                                href="https://github.com/xpriment626/polygon-testnet-marketplace"
                                class="block mt-1 text-lg leading-tight font-medium text-white hover:underline"
                            >
                                View Code
                            </a>
                            <p class="mt-2 text-white">
                                This project demonstrates a working knowledge of
                                the full-stack dApp building process. From
                                contracts to front end, as well as deployment on
                                both the Polygon Testnet and Vercel.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
