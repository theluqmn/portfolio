import xIcon from "../assets/icons/x.svg"
import instagramIcon from "../assets/icons/instagram.svg"

export default function Contact() {
    return (
        <div class="space-y-3">
            <h1 class="text-3xl font-semibold">
                Contact
            </h1>

            <p>
                Below are all of my social media accounts, feel free to contact me if necessary.
                I typically respond within 24 hours, except for Instagram (I barely use that account).
            </p>

            <hr className="border-t-2 my-4 border-[rgb(25,25,25)]" />

            <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                <Frame>
                    <a href="https://x.com/theluqmn" target="_blank">
                        <div class="flex items-center gap-2 justify-center">
                            <img src={xIcon} alt="x icon" class="w-6 h-6" />
                            <h1 class="text-base lg:text-xl text-black">
                                @theluqmn
                            </h1>
                        </div>
                    </a>
                </Frame>

                <Frame>
                    <a href="https://instagram.com/theluqmn" target="_blank">
                        <div class="flex items-center gap-2 justify-center">
                            <img src={instagramIcon} alt="x icon" class="w-6 h-6" />
                            <h1 class="text-base lg:text-xl text-black">
                                @theluqmn
                            </h1>
                        </div>
                    </a>
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