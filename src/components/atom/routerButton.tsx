import Link from "next/link"

type RouterButtonProps = {
    self?: boolean,
    className?: string,
    children: string,
    routeName?: string,
}

export function RouterButton({ self, className, children, routeName }: RouterButtonProps) {
    return (
        <Link href={routeName ?? ''} className={className}>
            {children}
        </Link>
    )
}