import { CustomCheckbox } from "../../shared/Inputs/TextInput"
import { LongCardInfo } from "../../shared/LongCardInfo/LongCardInfo";
import { SmallCardInfo } from "../../shared/SmallCardInfo/smallInfoCard"
import { Chart } from "./Chart/Chart.tsx";
import { Switcher } from "./Switcher/Switcher"

import { data } from './mock.data.ts';

export const Risks = () => {

    console.log(data);
    const field = {
        name: "yard",
    }

    return (
        <div className="flex-grow">
            <div className="flex gap-5 md:flex-row flex-col w-full">
                <div className="flex-1 flex items-center flex-col gap-5 md:w-4/5">
                    <span className="text-headline text-center px-10 py-6 bg-bg-block rounded-main">Информация о квартирах
                        в залоговом портфеле банка</span>
                    <div className="flex gap-3 flex-grow w-full">
                        <SmallCardInfo color="main-purple" title="Оценка залогового портфеля" value="349 млн ₽" />
                        <SmallCardInfo size="text-2xl" color="main-green" title="Динамика за последние полгода" value="+ 2,67 млн ₽ (0,77%)" />
                    </div>
                    <div className="flex gap-3">
                        <SmallCardInfo size="text-2xl" color="main-red" title="Динамика за последний год" value="− 1,67 млн ₽ (0,56%)" />
                        <SmallCardInfo size="text-2xl" color="main-green" title="Динамика за последние 5 лет" value="+ 102,63 млн ₽ (29,32%)" />
                    </div>
                </div>


                <div className="md:w-1/5 flex-1 flex items-center flex-col px-2 py-6 bg-bg-block justify-center text-center font-semibold">
                    <p className="mt-5 text-2xl px-20">Ликвидность недвижимости в портфеле</p>
                    <Chart />
                    <p className="text-xl">Квартир <span className="text-2xl text-main-purple">301</span> всего</p>
                </div>
            </div>

            <div className="flex items-center mt-5 gap-2">
                <Switcher />
                <CustomCheckbox field={field} label="с высокой ликвидностью" />

                <CustomCheckbox field={field} label="с средней ликвидностью" />

                <CustomCheckbox field={field} label="с низкой ликвидностью" />

                <CustomCheckbox field={field} label="на торгах" />
            </div>
            <div className="flex flex-col gap-5 mt-6">
                {data.map((info, index) => {
                    return (
                        <LongCardInfo key={index} id={info.id} address={info.address} icon={info.icon} price={info.price} liquidityTitle={info.liquidityTitle} />
                    );
                })}
            </div>
        </div>
    )
}
