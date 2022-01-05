import "../styles/globals.css";
import Link from "next/link";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
    const route = useRouter();
    return (
        <div>
            <nav className="p-6 bg-transparent">
                <p
                    className="text-4xl text-black font-bold flex justify-center hover:cursor-pointer hover:text-purple-700"
                    onClick={() => route.push("/")}
                >
                    Emmett Childs
                </p>
                <div className="flex justify-center mt-4">
                    <Link href="https://www.linkedin.com/in/emmett-childs-gevero-1b524a1b1/">
                        <a className="mr-8 text-black hover:underline hover:text-purple-700">
                            LinkedIn
                        </a>
                    </Link>
                    <Link href="https://github.com/xpriment626">
                        <a className="mr-8 text-black hover:underline hover:text-purple-700">
                            Github
                        </a>
                    </Link>
                    <Link href="https://www.instagram.com/emmettchilds_/?hl=en">
                        <a className="mr-8 text-black hover:underline hover:text-purple-700">
                            Instagram
                        </a>
                    </Link>
                    <Link href="https://www.facebook.com/">
                        <a className="mr-8 text-black hover:underline hover:text-purple-700">
                            Facebook
                        </a>
                    </Link>
                </div>
            </nav>
            <Component {...pageProps} />
        </div>
    );
}

export default MyApp;
