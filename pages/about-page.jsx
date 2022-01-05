export default function About() {
    return (
        <div className="flex justify-center align-middle">
            <div className="grid grid-rows-2 grid-cols-1">
                <div
                    className="text-white bg-black pt-15 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 hover:shadow-black hover:shadow-xl"
                    style={{ width: 516, height: 620 }}
                >
                    <div className="flex justify-center pt-10">
                        <h1 className="text-3xl">About Me</h1>
                    </div>
                    <br />
                    <div className="p-4">
                        <p>
                            I'm an independent smart contract researcher and
                            developer working on bringing smart contract
                            solutions to businesses, institutions, and other
                            organisations in Metro Manila.
                        </p>
                        <br />
                        <p>
                            I am also a pulic speaker and 1-on-1 educator, and
                            have helped quite a few students get up to speed on
                            web3.0 and blockchain technology.
                        </p>
                        <br />
                        <p>
                            My professional exprience includes digital
                            marketing, management, and even a stint in the
                            financial markets as an intern portfolio manager at
                            a family office fund. I worked as the Editor & Chief
                            of an e-commerce brand building agency, where I
                            picked up a thing or two about deadline-focused
                            systems and people management.
                        </p>
                        <br />
                        <p>
                            I'm confident that I'll be able to use my diverse
                            skillset to bring the value of 6 people to any
                            project, startup, or organisation that needs it.
                        </p>
                        <br />
                        <p>
                            So what are you waiting for? Let's make some magic!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
