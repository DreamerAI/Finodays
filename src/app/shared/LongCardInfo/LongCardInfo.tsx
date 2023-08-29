import { Icon } from "../Icon/Icon";

export interface LongCardInfoProps {
    address: string;
    icon: string;
    id: string;
    price: string;
    liquidityTitle: string;
}

export const LongCardInfo = ({ address, icon, id, price, liquidityTitle }: LongCardInfoProps) => {
    let borderColorClass = '';
    let textColorClass = '';

    if (liquidityTitle === "Высокая ликвидность") {
        borderColorClass = 'border-main-green';
        textColorClass = 'text-main-green';
    } else if (liquidityTitle === "Средняя ликвидность") {
        borderColorClass = 'border-main-purple';
        textColorClass = 'text-main-purple';
    } else if (liquidityTitle === "Низкая ликвидность") {
        borderColorClass = 'border-main-red';
        textColorClass = 'text-main-red';
    }

    return (
        <div className={`flex p-4 rounded-main bg-bg-block justify-between`}>
            <div className="flex items-center gap-5">
                <Icon iconName={icon} width="44" height="44" />
                <div>
                    <span className={`text-text-dark-gray text-sm`}>{id}</span>
                    <p className={`font-bold `}>{address}</p>
                </div>
            </div>
            <div className="flex items-center gap-5">
                <span className={`font-bold text-2xl text-text-dark-gray`}>{price}</span>
                <span className={`text-center text-base mr-2 py-3 px-4 border-2 rounded-main w-56 font-medium ${borderColorClass} ${textColorClass}`}>{liquidityTitle}</span>
                <Icon iconName="rightarrow" width="12" height="12" />
            </div>
        </div>
    );
}


