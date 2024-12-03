import KualaLumpur from "../assets/kuala-lumpur.jpg"
import Books from "../assets/books.jpg"

import ImageFrame from "./ImageFrame"

export default function About() {
    return (
        <div class="space-y-3">
            <div class="flex flex-col gap-4">
                <p>
                    Howdy, I am <b class="font-semibold text-white">Luqman</b> (also goes by Luq),
                    just someone who does coding for fun, amongst other things.
                </p>

                <p>
                    Why "The Renaissance Man"? I turned my trouble specializing to my advantage,
                    by deciding to learn a little bit of everything. Of course I have my own set
                    of specialities, but I dabbling in other fields is just as fun.
                </p>

                <p class="text-xs text-[rgb(150,150,150)]">
                    Also it is because I find it a cool term lol, so why not?
                </p>
            </div>

            <div class="pb-32 grid grid-cols-1 lg:grid-cols-2 gap-4">
                <ImageFrame src={KualaLumpur} alt="Kuala Lumpur, Malaysia">
                    <div class="flex flex-col gap-2 text-left">
                        <h1 class="text-base lg:text-xl text-gray-300">
                            Currently based in
                        </h1>
                        <h1 class="text-xl lg:text-2xl font-semibold">
                            Kuala Lumpur, Malaysia
                        </h1>
                    </div>
                </ImageFrame>

                <ImageFrame src={Books} alt="Books">
                    <div class="flex flex-col gap-2 text-left lg:text-right">
                        <h1 class="text-base lg:text-xl text-gray-300">
                            Living as a
                        </h1>

                        <h1 class="text-xl lg:text-2xl font-semibold">
                            Student
                        </h1>
                    </div>
                </ImageFrame>
            </div>
        </div>
    )
}