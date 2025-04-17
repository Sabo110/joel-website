import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

type PopoverDemoProps = {
    children: React.ReactNode,
    trigger: React.ReactNode,
}
export default function PopoverDemo({ children, trigger }: PopoverDemoProps) {
    return (
        <Popover>
            <PopoverTrigger asChild>
                {trigger}
            </PopoverTrigger>
            <PopoverContent className="w-80">
                {children}
            </PopoverContent>
        </Popover>
    )
}
