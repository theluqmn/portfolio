import { createSignal } from "solid-js";

import listIcon from "./assets/icons/list.svg"
import pfp from "./assets/pfp.jpg"
import openIcon  from "./assets/icons/open.svg"

import xIcon from "./assets/icons/x.svg"
import instagramIcon from "./assets/icons/instagram.svg"
import githubIcon from "./assets/icons/github.svg"


export default function App() {
    return (
        <div>
            <header class="p-2 text-xl flex flex-col fixed z-10 bg-[rgb(82,157,242)] w-full backdrop-blur-sm">
                <div class="w-full md:w-8/12 mx-auto flex items-center justify-between gap-3">
                    <div class="flex items-center gap-3 flex-1">
                        <button class="p-2 bg-white outline outline-2">
                            <img src={listIcon} alt="list icon" class="w-6 h-6" />
                        </button>

                        <div class="p-1 flex items-center gap-3 bg-white hover:bg-gray-200 duration-500 outline outline-2 flex-1">
                            <img src={pfp} alt="pfp" class="w-8 h-8 object-cover" />

                            <h1 class="font-semibold text-black">
                                Luqman
                            </h1>
                        </div>
                    </div>

                    <div class="p-2 flex items-center gap-4 bg-white text-[rgb(0,0,0)] hover:bg-gray-200 duration-500 outline outline-2">
                        <a href="https://x.com/theluqmn" target="_blank">
                            <img src={xIcon} class="w-6 h-6 hover:scale-110 duration-300"/>
                        </a>

                        <a href="https://instagram.com/theluqmn" target="_blank">
                            <img src={instagramIcon} class="w-6 h-6 hover:scale-110 duration-300"/>
                        </a>

                        <a href="https://github.com/theluqmn" target="_blank">
                            <img src={githubIcon} class="w-6 h-6 hover:scale-110 duration-300"/>
                        </a>
                    </div>
                </div>
            </header>

            {/* Content */}
            <div class="pt-16 p-2 lg:w-8/12 items-center mx-auto space-y-4 text-sm lg:text-base">
                <h1>Hello</h1>
            </div>
        </div>
    )
}
