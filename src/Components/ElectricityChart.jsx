import React from 'react';
import { useSelector } from 'react-redux';
import {
    AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';

const data = [
    { day: 'Mon', Amount: 10 },
    { day: 'Tue', Amount: 25 },
    { day: 'Wed', Amount: 18 },
    { day: 'Thu', Amount: 40 },
    { day: 'Fri', Amount: 15 },
    { day: 'Sat', Amount: 30 },
    { day: 'Sun', Amount: 35 }
];

const ElectricityChart = () => {
    const theme = useSelector((state) => state.theme);

    return (
        <div className="bg-white rounded-xl shadow-md p-4 w-[100%]"
            style={{
                background: theme.mainPage,
                color: theme.textColor,
                boxShadow: `0 0 10px 0 ${theme.shadow}`, // All-around glow/shadow
                transition: 'box-shadow 0.3s ease'
            }}>
            <div className="flex justify-between items-center mb-4 px-2">
                <h2 className="text-sm font-medium ">Electricity spending</h2>
                <span className="text-sm ">Last 7 day ▾</span>
            </div>
            <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={data}>
                    <defs>
                        <linearGradient id="colorAmount" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="10%" stopColor={theme.charPrimary} stopOpacity={0.3} />
                            <stop offset="200%" stopColor={theme.charPrimary} stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: theme.mainPageInvert, fontSize: 12 }} />
                    <YAxis axisLine={false} tickLine={false} tick={{ fill: '#999', fontSize: 12 }} />
                    <CartesianGrid vertical={false} strokeDasharray="3 3" />
                    <Tooltip
                        contentStyle={{
                            backgroundColor: '#1F1F1F',
                            border: 'none',
                            borderRadius: '8px',
                            padding: '4px 8px'
                        }}
                        itemStyle={{
                            color: '#8884d8',
                            fontSize: '12px'
                        }}
                        labelStyle={{
                            color: '#AAAAAA',
                            fontSize: '12px'
                        }}
                    />
                    <Area
                        type="monotone"
                        dataKey="Amount"
                        stroke={theme.charPrimary}
                        strokeWidth={2}
                        fill="url(#colorAmount)"
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};

export default ElectricityChart;
