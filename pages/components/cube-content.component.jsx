import { useRouter } from "next/router";

const CubeContent = () => {
    const route = useRouter();

    return (
        <div className="grid grid-rows-2 grid-cols-2 gap-4 pt-2">
            <div
                className="text-white bg-black transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 hover:shadow-black hover:shadow-md"
                style={{ height: 250, width: 250 }}
                onClick={() => route.push("projects-page")}
            >
                <div className="flex justify-center align-middle m-20 p-5">
                    <h1 className="text-4xl font-bold">Projects</h1>
                </div>
            </div>
            <div
                className="text-white bg-black transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 hover:shadow-black hover:shadow-md"
                style={{ height: 250, width: 250 }}
                onClick={() => route.push("about-page")}
            >
                <div className="flex justify-center align-middle m-20 p-5">
                    <h1 className="text-4xl font-bold">About</h1>
                </div>
            </div>
            <div
                className="text-white bg-black"
                style={{ height: 250, width: 250 }}
            >
                <div className="flex justify-center align-middle m-5 mt-20 pr-5">
                    <div className="grid grid-cols-1 pr-5">
                        <h1 className="text-4xl font-bold">Contact:</h1>
                        <h1 className="font-bold">
                            emmettchilds@thegobospot.com
                        </h1>
                        <h1 className="font-bold">echildsgevero@gmail.com</h1>
                    </div>
                </div>
            </div>
            <div
                className="text-white bg-black transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 hover:shadow-black hover:shadow-md"
                style={{ height: 250, width: 250 }}
                onClick={() => route.push("/")}
            >
                <div className="flex justify-center align-middle m-5 p-10">
                    <h1 className="text-4xl font-bold">
                        Smart Contract Archive
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default CubeContent;
