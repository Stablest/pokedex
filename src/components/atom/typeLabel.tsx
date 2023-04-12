type TypeLabelProps = {
    bgColor: string,
    children: string,
}

export function TypeLabel({ bgColor, children }: TypeLabelProps) {
    return (
        <span className={`${bgColor} text-2xl font-bold w-28 h-12 rounded-full flex justify-center items-center `}>
            {children}
        </span>
    )
}