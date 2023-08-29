import { useState } from 'react';
import houseImage from '../../../assets/images/house.png';
import MyForm from './Form';

export const Calculator = () => {

    const [marketValue, setMarketValue] = useState<number>(0);

    const roundedMarketValue = (marketValue / 1000000).toFixed(1).replace(".", ",");
    const highMarketValue = ((marketValue * 0.05 + marketValue) / 1000000).toFixed(1).replace(".", ",");
    const lowMarketValue = ((+ marketValue - (marketValue * 0.05)) / 1000000).toFixed(1).replace(".", ",");


    return (
        <div className='flex flex-col gap-5 flex-grow'>
            <div className="flex gap-5 md:flex-row flex-col">
                <div className="flex-1 flex items-center flex-col gap-5">
                    <span className="text-headline text-center px-10 py-6 bg-bg-block rounded-main text-main-purple">Рассчитаем реальную стоимость квартиры</span>
                    <img src={houseImage} alt="дом" className="hidden md:block w-full h-full py-20 px-8 bg-bg-block rounded-main text-main-purple" />
                </div>
                <MyForm setMarketValue={setMarketValue} />
            </div>
            <div className='bg-bg-block py-10 px-2 md:px-10 flex flex-col gap-8 text-main-black'>
                <h2 className="text-headline text-center rounded-main text-main-black mt-5 font-semibold">Результат оценки</h2>
                <div className='flex gap-5 items-center justify-center md:flex-row flex-col mx-10'>
                    <div className='bg-bg-purple flex flex-col gap-4 py-5 px-15 text-center w-full rounded-main border border-border-light'>
                        <p className='text-base'>
                            Заниженная стоимость
                        </p>
                        <span className='text-main-purple text-caption'>{lowMarketValue} млн ₽</span>
                    </div>
                    <div className='bg-bg-purple flex flex-col gap-4 py-8 px-15 text-center w-full rounded-main border border-border-regular'>
                        <p className='text-base'>
                            Рыночная стоимость
                        </p>
                        <span className='text-main-purple text-caption'>{roundedMarketValue} млн ₽</span>
                    </div>
                    <div className='bg-bg-purple flex flex-col gap-4 py-5 px-15 text-center w-full rounded-main border border-border-light'>
                        <p className='text-base'>
                            Завышенная стоимость
                        </p>
                        <span className='text-main-purple text-caption'>{highMarketValue} млн ₽</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
