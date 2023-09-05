import WhiteToRed from "../_assets/WhiteToRed.svg"
import Image from 'next/image';
import Reveal from './Reveal.jsx';

export default function Future () {
    return (
        <>
            <div className="flex flex-col justify-center bg-silver text-purple py-40 px-[10dvw]">
                <Reveal>
                    <h1 className="text-8xl font-bold FutureTexture">Building the future, one line of code at a time</h1>
                </Reveal>
                <Reveal>
                    <div className="text-4xl font-bold flex">
                        <span className="px-10 py-3 m-3 rounded-lg bg-red text-silver border-4 border-red">Case Studies</span>
                        <span className="px-16 py-3 m-3 rounded-lg bg-silver text-purple border-4">Contact</span>
                    </div>
                </Reveal>

            </div>
            <Image src={WhiteToRed} alt="test" />

        </>
    )
}
