import { useState } from "react";
import { PieChart, Pie, Sector, ResponsiveContainer, Cell } from "recharts";

const data = [
    { name: "Высокая", value: 188 },
    { name: "Низкая", value: 30 },
    { name: "Средняя", value: 83 },
];

interface RenderPayload {
    name: string;
}

interface RenderActiveShapeProps {
    cx: number;
    cy: number;
    midAngle: number;
    innerRadius: number;
    outerRadius: number;
    startAngle: number;
    endAngle: number;
    payload: RenderPayload;             // data payload of the active shape
    percent: number;
    value: number;
}


const renderActiveShape = (props: RenderActiveShapeProps) => {
    const RADIAN = Math.PI / 180;
    const {
        cx,
        cy,
        midAngle,
        innerRadius,
        outerRadius,
        startAngle,
        endAngle,
        payload,
        percent,
        value
    } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? "start" : "end";
    let sectorColor;

    // Выбор цвета в зависимости от значения payload.name
    if (payload.name === "Высокая") {
        sectorColor = "#6A9F48";
    } else if (payload.name === "Низкая") {
        sectorColor = "#476BF0";
    } else if (payload.name === "Средняя") {
        sectorColor = "#E55C5C";
    }

    return (
        <g>
            <text x={cx} y={cy} dy={8} textAnchor="middle" fill={sectorColor}>
                {payload.name}
            </text>
            <Sector
                cx={cx}
                cy={cy}
                innerRadius={innerRadius}
                outerRadius={outerRadius}
                startAngle={startAngle}
                endAngle={endAngle}
                fill={sectorColor}
            />
            <Sector
                cx={cx}
                cy={cy}
                startAngle={startAngle}
                endAngle={endAngle}
                innerRadius={outerRadius + 6}
                outerRadius={outerRadius + 10}
                fill={sectorColor}
            />
            <path
                d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
                stroke={sectorColor}
                fill="none"
            />
            <circle cx={ex} cy={ey} r={2} fill={sectorColor} stroke="none" />
            <text
                x={ex + (cos >= 0 ? 1 : -1) * 12}
                y={ey}
                textAnchor={textAnchor}
                fill={sectorColor}
            >{`Кол-во квартир ${value}`}</text>
            <text
                x={ex + (cos >= 0 ? 1 : -1) * 12}
                y={ey}
                dy={18}
                textAnchor={textAnchor}
                fill={sectorColor}
            >
                {`(${(percent * 100).toFixed(2)}%)`}
            </text>
        </g>
    );
};

export const Chart = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <ResponsiveContainer width="100%" height={450}>
            <PieChart>
                <Pie
                    activeIndex={activeIndex}
                    activeShape={renderActiveShape}
                    data={data}
                    innerRadius={100}
                    outerRadius={160}
                    dataKey="value"
                    onMouseEnter={(_, index) => setActiveIndex(index)}
                    onMouseLeave={() => setActiveIndex(-1)}
                >
                    {data.map((entry, index) => (
                        <Cell
                            key={`cell-${index}`}
                            fill={
                                entry.name === "Высокая"
                                    ? "#6A9F48"
                                    : entry.name === "Низкая"
                                        ? "#476BF0"
                                        : "#E55C5C"
                            }
                        />
                    ))}
                </Pie>
            </PieChart>
        </ResponsiveContainer>
    );
}
