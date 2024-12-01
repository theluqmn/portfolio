import pfp from "../assets/pfp.jpg"

export default function Projects() {
    return (
        <div class="space-y-3">
            <h1 class="text-3xl font-semibold">
                Projects
            </h1>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                <Frame></Frame>
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