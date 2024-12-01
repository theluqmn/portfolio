export default function ImageFrame(props) {
    return (
        <div class={`h-full w-full p-4 duration-500 bg-cover bg-center bg-black/60 hover:bg-black/70 bg-blend-multiply bg-[image:var(--image-url)] outline outline-2 -outline-offset-2 outline-[rgb(15,15,15)]`}
            style={{ '--image-url': `url(${props.src})` }}>
            {props.children}
        </div>
    )
}