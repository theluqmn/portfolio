import { createSignal } from "solid-js";

import listIcon from "./assets/icons/list.svg"
import pfp from "./assets/pfp.jpg"
import openIcon  from "./assets/icons/open.svg"

import xIcon from "./assets/icons/x.svg"
import instagramIcon from "./assets/icons/instagram.svg"
import githubIcon from "./assets/icons/github.svg"

import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Interests from "./components/Interests";
import Contact from "./components/Contact";

export default function App() {
    return (
        <div>
            {/* Header */}
            <header class="p-2 text-xl flex flex-col fixed z-10 bg-[url('./assets/background-header.jpg')] bg-cover bg-center w-full backdrop-blur-sm">
                <div class="w-full md:w-8/12 mx-auto flex items-center justify-between gap-3">
                    <div class="flex items-center gap-3 flex-1">
                        <button class="p-2 bg-white hover:bg-[rgb(220,220,220)] duration-500">
                            <img src={listIcon} alt="list icon" class="w-6 h-6" />
                        </button>

                        <div class="p-1 flex items-center gap-3 bg-white hover:bg-[rgb(220,220,220)] duration-500 flex-1">
                            <img src={pfp} alt="pfp" class="w-8 h-8 object-cover" />

                            <div class="flex gap-2 items-center">
                                <h1 class="font-semibold text-black">
                                    Luqman
                                </h1>

                                <h1 class="text-base text-[rgb(25,25,25)]">
                                    portfolio
                                </h1>
                            </div>
                        </div>
                    </div>

                    <div class="p-2 flex items-center gap-4 bg-white text-[rgb(0,0,0)] hover:bg-[rgb(220,220,220)] duration-500">
                        <a href="https://x.com/theluqmn" target="_blank">
                            <img src={xIcon} class="w-6 h-6 hover:scale-105 duration-300"/>
                        </a>

                        <a href="https://instagram.com/theluqmn" target="_blank">
                            <img src={instagramIcon} class="w-6 h-6 hover:scale-105 duration-300"/>
                        </a>

                        <a href="https://github.com/theluqmn" target="_blank">
                            <img src={githubIcon} class="w-6 h-6 hover:scale-105 duration-300"/>
                        </a>
                    </div>
                </div>
            </header>

            {/* Content */}
            <div class="pt-16 p-2 md:p-1 md:pt-16 lg:w-8/12 items-center mx-auto space-y-3 text-sm lg:text-base">
                <Hero/>

                {/* Banner for blog */}
                <div class="p-2 bg-white flex flex-row justify-between items-center">
                    <h1 class="text-black text-base lg:text-xl">
                        Posts on various topics, including my personal thoughts
                    </h1>

                    <button
                        onClick={() => window.open('/blog', '_blank')}
                        class="p-2 px-4 hover:bg-[rgb(35,35,35)] duration-300 flex space-x-2 items-center bg-black">
                        <p class="text-base lg:text-xl text-white">
                            Blog
                        </p>
                    
                        <img src={openIcon} class="h-3 w-3 lg:h-4 lg:w-4 invert" />
                    </button>
                </div>

                <About/>
                <Projects/>
                <Interests/>
                <Contact/>
            </div>

            <footer class="flex items-center gap-3 p-2 md:p-1 md:pt-16 lg:w-8/12 mx-auto space-y-3 text-sm lg:text-base">
                <p class="text-sm text-white">
                    Designed and developed by <a href="https://x.com/theluqmn" target="_blank" class="text-[rgb(166,232,238)]">
                        Luqman
                    </a>. The source code for this website is available  on <a href="https://github.com/theluqmn/portfolio" target="_blank" class="text-[rgb(166,232,238)]">
                        GitHub
                    </a>. <b class="font-semibold">This website may undergo drastic changes without notice because I work on it when bored!</b>
                </p>
            </footer>
        </div>
    )
}
