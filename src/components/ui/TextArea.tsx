/* 
    Custom modules
*/
import { cn } from "@/lib/utils";

export const TextArea = ({
    className,
    ...props
}:React.ComponentProps<'textarea'>) => {
    return (
        <textarea className={cn(
            'w-full px-4 py-3 rounded-2xl bg-surface-container-high text-on-surface border-2 border-transparent focus:border-primary focus:outline-none transition-colors',
            className)} 
            rows={5}
            {...props}
        ></textarea>
    )
}