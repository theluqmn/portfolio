export default function Contact() {
    return (
        <div class="space-y-3">
            <h1 class="text-3xl font-semibold">
                Contact
            </h1>
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