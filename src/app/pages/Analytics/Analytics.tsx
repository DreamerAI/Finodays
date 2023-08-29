/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useEffect, useState } from 'react';
import AnalyticsService, { AnalyticsRequest } from '../../@api/analytics.service';
import {
    ScatterChart,
    Scatter,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from "recharts";
import { TotalAreaChartModel } from '../../@api/model/analytics.model';
import { Form, Formik } from 'formik';
import { TextInput } from '../../shared/Inputs/TextInput';

export const Analytics = () => {

    const [totalArea, setTotalArea] = useState<TotalAreaChartModel[] | undefined>();
    const [constructionYear, setConstructionYear] = useState<TotalAreaChartModel[] | undefined>();


    const xAreaLabel = {
        value: 'Цена, млн ₽',
        position: 'insideBottom',
        offset: -20,
        fill: "#476BF0",

        fontSize: "24px",
    }

    const yAreaLabel = {
        value: 'Площадь',
        position: 'left',
        offset: 50,
        textAnchor: 'middle',
        fill: "#476BF0",
        angle: -90,
        fontSize: "24px",
    }

    const xConstructionYearLabel = {
        value: 'Год постройки дома',
        position: 'insideBottom',
        offset: -20,
        fill: "#476BF0",
        fontSize: "24px",
    }

    const yConstructionYearLabel = {
        value: 'Цена, млн ₽',
        position: 'left',
        offset: 50,
        textAnchor: 'middle',
        fill: "#476BF0",
        angle: -90,
        fontSize: "24px",
    }

    const fetchData = async (request: AnalyticsRequest) => {
        try {
            const [totalAreaResponse, constructionYearResponse] = await Promise.all([
                AnalyticsService.getTotalArea(request),
                AnalyticsService.getConstructionYear(request),
            ]);

            const totalAreaData = totalAreaResponse;
            const constructionYearData = constructionYearResponse;

            // @ts-ignore
            setTotalArea(totalAreaData);
            // @ts-ignore
            setConstructionYear(constructionYearData);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        // Fetch data when the component mounts and whenever the form is submitted
        const initialRequest: AnalyticsRequest = {
            region: 1,
            limit: 1000,
            offset: 0,
        };
        fetchData(initialRequest);

    }, []);




    return (
        <div className='flex flex-col'>
            <div>
                <Formik
                    initialValues={{
                        region: 1,
                        limit: 1000,
                        offset: 0,
                    }}
                    onSubmit={(values) => {
                        const request: AnalyticsRequest = {
                            region: values.region,
                            limit: values.limit,
                            offset: values.offset,
                        };

                        fetchData(request); // Fetch data with the new request parameters
                    }}
                >
                    <Form className='flex bg-bg-block p-5 mb-5 justify-between rounded-main items-center flex-col md:flex-row'>
                        {/* Ваши поля ввода */}
                        <div className='flex gap-5 flex-col md:flex-row w-full md:items-center'>
                            <label htmlFor='region'> Регион</label>
                            <TextInput name="region" type="number" placeholder='Регион' />
                            <label htmlFor='region'> Лимит</label>
                            <TextInput name="limit" type="number" placeholder='Лимит' />
                            <label htmlFor='region'> Страница</label>
                            <TextInput name="offset" type="number" placeholder='Страница' />
                        </div>


                        {/* Кнопка "Применить" */}
                        <button type="submit" className="mt-5 md:mt-0 w-full md:w-auto py-2 px-4 text-white bg-blue-500 rounded-md hover:bg-blue-600">применить</button>
                    </Form>
                </Formik>
            </div>

            <div className='text-center p-5 bg-bg-block rounded-main'>
                <ResponsiveContainer width="100%" height={600} className=" bg-white p-8 rounded-main">
                    <ScatterChart
                        margin={{
                            top: 40,
                            right: 80,
                            bottom: 100,
                            left: 80
                        }}
                    >
                        <CartesianGrid />
                        <XAxis type="number" dataKey="y" name="Цена" label={xAreaLabel} domain={['auto', 'auto']} unit={"Млн"} />
                        <YAxis type="number" dataKey="x" name="Площадь" label={yAreaLabel} domain={['auto', 'auto']} unit={"кв.м"} />
                        <Tooltip cursor={{ strokeDasharray: "3 3" }} />
                        <Scatter name="A school" data={totalArea} fill="#8884d8" shape="circle" opacity={0.8} fillOpacity={0.8} />
                        <text x="50%" y={20} textAnchor="middle" className='text-2xl font-medium'>Зависимость цены от площади квартиры</text>
                    </ScatterChart>
                </ResponsiveContainer>
            </div>

            <div className='text-center p-5 bg-bg-block rounded-main'>
                <ResponsiveContainer width="100%" height={600} className=" bg-white p-8 rounded-main">
                    <ScatterChart
                        margin={{
                            top: 40,
                            right: 80,
                            bottom: 100,
                            left: 80
                        }}
                    >
                        <CartesianGrid />
                        <YAxis type="number" dataKey="y" name="Цена" label={yConstructionYearLabel} domain={['auto', 'auto']} unit={"Млн"} />
                        <XAxis type="number" dataKey="x" name="Год" label={xConstructionYearLabel} domain={['auto', 'auto']} unit={"г"} />
                        <Tooltip cursor={{ strokeDasharray: "3 3" }} />
                        <Scatter name="A school" data={constructionYear} fill="#8884d8" shape="circle" opacity={0.8} fillOpacity={0.8} />
                        <text x="50%" y={20} textAnchor="middle" className='text-2xl font-medium'>Зависимость стоимости от года постройки дома</text>
                    </ScatterChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
