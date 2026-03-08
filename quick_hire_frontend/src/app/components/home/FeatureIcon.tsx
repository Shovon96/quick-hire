import Image from "next/image"
import amdLogo from "../../../../public/assets/amd-logo.png"
import intelLogo from "../../../../public/assets/intel.png"
import talkitLogo from "../../../../public/assets/talkit.png"
import teslaLogo from "../../../../public/assets/tesla.png"
import vodafoneLogo from "../../../../public/assets/vodafone.png"

export default function FeatureIcon() {
    return (
        <section className="w-full bg-white py-10 md:py-16 lg:py-20">

            <div className="max-w-360 mx-auto px-6 md:px-12 lg:px-31">

                {/* Title */}
                <p className="text-[#202430] text-[18px] mb-10 font-epilogue font-normal text-left">
                    Companies we helped grow
                </p>

                {/* Logos Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 lg:gap-4 items-center justify-start md:justify-items-center">

                    <Image
                        width={153.54}
                        height={40}
                        src={vodafoneLogo}
                        alt="Vodafone"
                        className="opacity-100 transition max-w-full justify-self-start"
                    />

                    <Image
                        width={82.04}
                        height={32}
                        src={intelLogo}
                        alt="Intel"
                        className="opacity-100 transition max-w-full"
                    />

                    <Image
                        width={182.68}
                        height={24}
                        src={teslaLogo}
                        alt="Tesla"
                        className="opacity-100 transition max-w-full justify-self-start"
                    />

                    <Image
                        width={116.47}
                        height={28}
                        src={amdLogo}
                        alt="AMD"
                        className="opacity-100 transition max-w-full"
                    />

                    <Image
                        width={108.19}
                        height={32}
                        src={talkitLogo}
                        alt="Talkit"
                        className="opacity-100 transition max-w-full"
                    />

                </div>

            </div>
        </section>
    )
}
