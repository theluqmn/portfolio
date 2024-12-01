import epicBackground from "../assets/LA.jpg"

export default function Hero() {
    return (
        <div>
            <img src={epicBackground} class="w-full h-full object-cover outline outline-white outline-2"/>
            <div class="pt-32 pb-32">
            </div>
        </div>
    )
}