import openIcon from "../assets/icons/open.svg"

import portfolioWebsite from "../assets/projects/porfolio-website.png"

export default function Projects() {
    return (
        <div class="space-y-3">
            <h1 class="text-3xl font-semibold">
                Projects
            </h1>

            <p>
                A few of my projects. View more on my <a href="https://github.com/theluqmn?tab=repositories" target="_blank" class="text-white hover:underline">Github</a>.
            </p>

            <hr className="border-t-2 my-4 border-[rgb(25,25,25)]" />

            <div class="grid grid-cols-2 md:grid-cols-3 gap-3">
                <Frame>
                    <a href="https://github.com/theluqmn/portfolio" target="_blank">
                        <img src={portfolioWebsite} alt="pfp" class="w-full object-cover" />

                        <h1 class="text-base lg:text-xl text-black flex items-center gap-1">
                            Portfolio Website <img src={openIcon} class="w-4 h-4" />
                        </h1>
                    </a>
                </Frame>

                <Frame>
                    <a href="https://github.com/theluqmn/ellison" target="_blank">
                        <h1 class="text-base lg:text-xl text-black flex items-center gap-1">
                            Ellison <img src={openIcon} class="w-4 h-4" />
                        </h1>
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