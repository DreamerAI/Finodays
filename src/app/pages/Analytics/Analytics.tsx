import { useEffect, useState } from 'react';
import AnalyticsService, { AnalyticsRequest, AnalyticsResponse } from '../../@api/analytics.service';
import {
    ScatterChart,
    Scatter,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from "recharts";
import { AnalyticsModel } from '../../@api/model/analytics.model';

export const Analytics = () => {

    const [data, setData] = useState<AnalyticsModel[] | undefined>();


    // const handlePointClick = (point: string) => {
    //     history.push(`/point/${point.id}`);
    // };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const request: AnalyticsRequest = {
                    region: 1,
                    limit: 1500,
                    offset: 0,
                };

                const response: AnalyticsResponse = await AnalyticsService.getTotalArea(request);
                if (response) {
                    // @ts-ignore
                    setData(response);
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    const xLabel = {
        value: 'Цена',
        position: 'insideBottom',
        offset: -20,
        fill: "#476BF0",

        fontSize: "24px",
    }

    const yLabel = {
        value: 'Площадь',
        position: 'left',
        offset: 50,
        textAnchor: 'middle',
        fill: "#476BF0",
        angle: -90,
        fontSize: "24px",
    }

    return (
        <div className='flex flex-col'>
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
                        <XAxis type="number" dataKey="y" name="Цена" label={xLabel} domain={['auto', 'auto']} unit={"Млн"} />
                        <YAxis type="number" dataKey="x" name="Площадь" label={yLabel} domain={['auto', 'auto']} unit={"кв.м"} />
                        <Tooltip cursor={{ strokeDasharray: "3 3" }} />
                        <Scatter name="A school" data={data} fill="#8884d8" shape="circle" opacity={0.8} fillOpacity={0.8} />
                        <text x="50%" y={20} textAnchor="middle" className='text-2xl font-medium'>Зависимость цены от площади квартиры</text>
                    </ScatterChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
