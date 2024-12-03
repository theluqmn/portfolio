import xIcon from "../assets/icons/x.svg"
import instagramIcon from "../assets/icons/instagram.svg"

export default function Interests() {
    return (
        <div class="space-y-3 pb-32">
            <h1 class="text-3xl font-semibold">
                Interests and Skills
            </h1>

            <p>
                My interests, and skills, in a nutshell.
            </p>

            <hr className="border-t-2 my-4 border-[rgb(25,25,25)]" />

            <div  class="grid grid-cols-2 md:grid-cols-3 gap-3">
                <Frame>
                    <h1 class="pb-2 text-base lg:text-xl text-black">
                        Programming
                    </h1>

                    <p class="text-sm lg:text-base text-[rgb(25,25,25)]">
                        JavaScript for the web and backend (and everything), x86 assembly and C for the low-level stuff,
                        Go for performance critical applications, and Python for Discord bots.
                    </p>
                </Frame>

                <Frame>
                    <h1 class="pb-2 text-base lg:text-xl text-black">
                        Finance
                    </h1>

                    <p class="text-sm lg:text-base text-[rgb(25,25,25)]">
                        Following crypto since 2018, stocks since 2021. Currently specialising in startups and economics of businesses.
                        Knowledgable in private equity, venture capital and corporate finance.
                    </p>
                </Frame>

                <Frame>
                    <h1 class="pb-2 text-base lg:text-xl text-black">
                        Semiconductors
                    </h1>

                    <p class="text-sm lg:text-base text-[rgb(25,25,25)]">
                        Loyal Intel enthusiast since 2021. Reads and researches about the latest semiconductor breakthroughs, and die
                        shot analysis. Key interests at the moment is Intel EMIB, backside power delivery, and Intel RibbonFet.
                    </p>
                </Frame>

                <Frame>
                    <h1 class="pb-2 text-base lg:text-xl text-black">
                        Aerospace
                    </h1>

                    <p class="text-sm lg:text-base text-[rgb(25,25,25)]">
                        Fan of aerospace since as far as I can remember. Started off with commercial airliners, then moved on to
                        military aircraft, and now rockets - since 2020. My favourite aircrafts are the A350-900 ULR, Boeing 787-9, and F-35C.
                    </p>
                </Frame>
            </div>
        </div>
    )
}

function Frame(props) {
    return (
        <div class="p-1 bg-white hover:bg-[rgb(220,220,220)] duration-500">
            {props.children}
        </div>
    )
}