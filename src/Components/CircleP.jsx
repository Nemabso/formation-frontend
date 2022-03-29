import React from 'react';

const cleanPercentage = (percentage) => {
    const tooLow = !Number.isFinite(+percentage) || percentage < 0;
    const tooHight = percentage > 100;
    return tooLow ? 0 : tooHight ? 100 : +percentage;
};

const Circle = ({ colour, pct }) => {
    const r = 40;
    const circ = 2 * Math.PI * r;
    const strokePct = ((100 - pct) * circ) / 100;
    return (
        <circle r={r} cx={100} cy={100} fill='transparent' stroke={strokePct !== circ ? colour : ""}
            strokeWidth={"0.5rem"} strokeDasharray={circ} strokeDashoffset={pct ? strokePct : 0} strokeLinecap='round' ></circle>
    )
};

const Text = ({ percentage }) => {
    return (
        <text x={"50%"} y={"50%"} dominantBaseline={"central"} textAnchor='middle' fontSize={"18px"}>{percentage}% </text>
    )
};


export default function CircleP({ percentage, colour }) {
    const pct = cleanPercentage(percentage);
    return (
        <svg width={200} height={200}>
            <g transform={`rotate(-90 100 100)`}>
                <Circle colour="lightgrey" />
                <Circle colour={colour} pct={pct} />
            </g>
            <Text percentage={pct} />
        </svg>
    )
}
