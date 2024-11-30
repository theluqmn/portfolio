import { createSignal } from "solid-js";

import listIcon from "./assets/icons/list.svg"
import pfp from "./assets/pfp.jpg"
import openIcon  from "./assets/icons/open.svg"

export default function App() {
    const [isMenuOpen, setIsMenuOpen] = createSignal(false);

    const handleClickOutside = (e) => {
        if (!e.target.closest('button')) {
            setIsMenuOpen(false);
        }
    };

    return (
        <div onClick={handleClickOutside} class="bg-gradient-r from-[rgb(0,0,0)] to-[rgb(50,50,50)]">
            <header class="p-2 text-xl flex flex-col fixed z-10 bg-[rgb(255,255,255)] w-full backdrop-blur-sm">
                {/* Header */}
                <div class="w-full md:w-8/12 mx-auto flex items-center justify-between">
                    <div class="flex items-center">
                        <button 
                            class="mr-4 p-2 duration-300 hover:bg-gray-100 rounded-lg"
                            onClick={() => setIsMenuOpen(!isMenuOpen())}
                        >
                            <img src={listIcon} class={`w-6 h-6 transition-transform duration-500 ${isMenuOpen() ? 'rotate-90' : ''}`} />
                        </button>

                        <div class="flex gap-2 items-center">
                            <img src={pfp} class="w-8 h-8 rounded-full object-cover" alt="luqman profile picture"/>
                            
                            <div class="flex gap-2 items-center">
                                <h1 class="text-2xl font-semibold text-black">
                                    Luqman
                                </h1>

                                <h1 class="text-base text-[rgb(25,25,25)]">
                                    (Portfolio)
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Collapsible Menu */}
                <div class={`w-full md:w-8/12 mx-auto overflow-hidden transition-all duration-500 ${isMenuOpen() ? 'max-h-10' : 'max-h-0'}`}>
                    <div class="flex gap-2 overflow-x-auto whitespace-nowrap">
                        <a href="https://github.com/theluqmn/portfolio" class="text-base block px-4 py-2 duration-300 hover:bg-gray-100 rounded-lg">
                            Repository
                        </a>

                        <a href="https://theluqmn.github.io/blog" class="items-center text-base block px-4 py-2 duration-300 hover:bg-gray-100 rounded-lg">
                            Blog
                            <img src={openIcon} class="w-3 h-3 inline-block ml-1"/>
                        </a>
                    </div>
                </div>
            </header>
        </div>
    )
}