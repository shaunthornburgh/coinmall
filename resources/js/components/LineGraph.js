import React from "react";
import { useParams } from "react-router-dom";
import 'chartjs-adapter-moment';
import {useAxios} from "../hooks/useAxios";
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
import moment from "moment";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    TimeScale,
    Tooltip,

);

const options = {
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

export const LineGraph = (props) => {
    const { timeFrame } = useParams();
    let days = timeFrame;
    if (!days) {
        days = 365;
    }
    const { response } = useAxios(`coins/${props.coin}/market_chart?vs_currency=usd&days=${days}`, [props.coin, days]);

    if (!response) {
        return (
            <div className="wrapper-container mt-8">
                <div>Loading</div>
            </div>
        )
    }
    const options = {
        responsive: true,
    };
    const coinChartData = response.prices.map(value => ({ x: value[0], y: value[1].toFixed(2) }));
    const data = {
        labels: coinChartData.map(value => moment(value.x).format('MMM DD')),
        datasets: [
            {
                fill: true,
                label: props.coin,
                data: coinChartData.map(val => val.y),
                borderColor: "#02cd97",
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            }
        ]
    }

    return (
        <Line
            data={data}
            options={options}
        />
    )
}
