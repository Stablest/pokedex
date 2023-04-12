type RouterButtonProps = {
    children: string
}

export function RouterButton({ children }: RouterButtonProps) {
    return (
        <button className="bg-light-brown w-36 h-24 text-3xl font-bold text-dark-white">
            {children}
        </button>
    )
}