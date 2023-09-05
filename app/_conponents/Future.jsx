import WhiteToRed from "../_assets/WhiteToRed.svg"
import Image from 'next/image';

export default function Future () {
    return (
        <>
            <div className="flex flex-col justify-center bg-silver text-purple">
                <h1 className="text-8xl mx-[10dvw] mt-[25dvh] font-bold FutureTexture">Building the future, one line of code at a time</h1>
                    <div className="text-4xl mx-[10dvw] font-bold flex mb-[15dvh]">
                        <span className="px-10 py-3 m-3 rounded-lg bg-red text-silver border-4 border-red">Case Studies</span>
                        <span className="px-16 py-3 m-3 rounded-lg bg-silver text-purple border-4">Contact</span>
                    </div>
                <Image src={WhiteToRed} alt="test" />
            </div>
        </>
    )
}
