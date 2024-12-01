import background from "../assets/background.jpg"
import backgroundMobile from "../assets/background-mobile.jpg"
import openIcon from "../assets/icons/open.svg"

export default function Hero() {
    return (
        <div className="relative space-y-2">
            <picture>
                <source media="(max-width: 768px)" srcSet={backgroundMobile} />
                <img src={background} class="w-full h-full object-cover"/>
            </picture>
            
            <div className="absolute inset-0 flex">
                <div class="p-4">
                    <h1 class="text-4xl lg:text-6xl text-[rgb(255,255,255)] font-semibold">
                        The Renaissance Man
                    </h1>

                    <p class="text-[rgba(250,250,250,0.9)] text-2xl lg:text-4xl">
                        A <span class="text-white">specialist</span> in generalising
                    </p>
                </div>
            </div>

            <hr className="border-t-2 my-4 border-[rgb(25,25,25)]" />
        </div>
    )
}