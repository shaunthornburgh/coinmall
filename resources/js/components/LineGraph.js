import React, {useEffect, useState}  from "react";
import 'chartjs-adapter-moment';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    TimeScale

} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    TimeScale,
    Tooltip,

);

export const options = {
    responsive: true,
    plugins: {
        tooltip: {
            mode: "index",
            intersect: false,
            usePointStyle: true,
        }
    },
    scales: {
        x: {
            type: 'time',
            time: {
                unit: 'day',
                tooltipFormat: "ll",
            },
            grid: {
                display:false
            },
        },
        y: {
            grid: {
                display: false
            },
            display: false,
        }
    }
};

export const LineGraph = () => {
    const [graphData, setGraphData] = useState([]);
    const createMockData = () => {
        let data = [];
        let value = 50;
        for (let i = 0; i < 366; i++) {
            let date = new Date();
            date.setHours(0,0,0,0);
            date.setDate(i);
            value += Math.round((Math.random() < 0.5 ? 1 : 0) * Math.random() * 10);
            data.push({x: date, y: value});
        }
        setGraphData(data);
    }
    useEffect(()=>{
        createMockData()
    }, []);

    return (
        <Line
            data={{
                datasets: [{
                    type: 'line',
                    borderColor: "#02cd97",
                    borderWidth: 2,
                    pointBorderColor: 'rgba(0, 0, 0, 0)',
                    pointBackgroundColor: 'rgba(0, 0, 0, 0)',
                    data: graphData,
                },],
            }}
            options={options}
        />
    )
}
