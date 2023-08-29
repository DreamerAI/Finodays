export interface SmallCardInfoProps {
    title: string;
    value: string;
    color: string;
    size?: string;
}

export const SmallCardInfo = ({ title, value, color, size }: SmallCardInfoProps) => {
    return (
        <div className="flex flex-1 py-4 px-4 bg-bg-block rounded-main flex-col text-center gap-3 justify-center">
            <p className="font-medium">{title}</p>
            <span className={`text-${color} font-bold text-3xl ${size}`}>{value}</span>
        </div>
    )
}
