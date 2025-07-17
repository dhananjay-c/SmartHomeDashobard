import React from 'react';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';
import { useSelector } from 'react-redux';

const data = [
    { name: 'Mar', Water: 30, Gas: 40 },
    { name: 'Apr', Water: 40, Gas: 50 },
    { name: 'May', Water: 50, Gas: 60 },
    { name: 'Jun', Water: 45, Gas: 55 },
    { name: 'Jul', Water: 35, Gas: 45 },
];

const CustomTooltip = ({ active, payload, label }) => {
    const theme = useSelector((state) => state.theme);
    if (active && payload && payload.length) {
        return (
            <div
                className="rounded-md px-2 py-1 text-xs"
                style={{
                    backgroundColor: theme.mainPage,
                    color: theme.textColor,
                    boxShadow: `0px 0px 5px ${theme.shadow}`
                }}
            >
                <p>{label}</p>
                <p>Water: {payload[0].value}</p>
                <p>Gas: {payload[1].value}</p>
            </div>
        );
    }
    return null;
};

const GasWaterBarChart = () => {
    const theme = useSelector((state) => state.theme);

    return (
        <div
            style={{
                backgroundColor: theme.mainPage,
                boxShadow: `0 0 10px ${theme.shadow}`,
                color: theme.textColor
            }}
            className="rounded-3xl p-10 w-[100%] h-[100%] flex flex-col justify-center"
        >
            <div className="flex justify-between mb-10 text-sm">
                <div className="flex gap-4 items-center">
                    <span className="flex items-center gap-1">
                        <span className="w-3 h-3 rounded-full" style={{ backgroundColor: theme.charSecondary }}></span>
                        Water
                    </span>
                    <span className="flex items-center gap-1">
                        <span className="w-3 h-3 rounded-full" style={{ backgroundColor: theme.charPrimary }}></span>
                        Gas
                    </span>
                </div>
                <div>Last 5 months ▾</div>
            </div>


            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    data={data}
                    barCategoryGap={15}
                    margin={{ top: 0, right: 0, left: 0, bottom: 0 }} // ← this helps remove left space
                >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e0e0e0" />
                    <XAxis dataKey="name" stroke={theme.textColor} />
                    <YAxis stroke={theme.textColor} width={30} /> {/* Reduce width from default 60 */}
                    <Tooltip content={<CustomTooltip />} />
                    <Bar dataKey="Water" fill={theme.charSecondary} radius={[4, 4, 0, 0]} />
                    <Bar dataKey="Gas" fill={theme.charPrimary} radius={[4, 4, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>


        </div>
    );
};

export default GasWaterBarChart;
