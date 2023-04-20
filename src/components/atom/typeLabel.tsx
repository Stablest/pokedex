type TypeLabelProps = {
    type: string,
    children: string,
}

export function TypeLabel({ type, children }: TypeLabelProps) {
    const bgColor = type === 'water' ? 'bg-water-blue' : 'bg-fire-red'

    return (
        <span className={`${bgColor} text-lg font-bold w-24 h-6 rounded-full flex justify-center items-center `}>
            {children}
        </span>
    )
}