// use client

import { lineChartData, lineChartOptions } from '@/variables/charts';
import type { ApexOptions } from 'apexcharts';
import { Component } from 'react';

import dynamic from 'next/dynamic';

const Chart = dynamic(() => import('react-apexcharts'), { loading: () => <p>Loading...</p> });

type State = {
    chartData: ApexOptions[ 'series' ];
    chartOptions: ApexOptions;
};

class LineChart extends Component<{}, State> {
    constructor(props: React.PropsWithChildren) {
        super(props);

        this.state = {
            chartData: [],
            chartOptions: {},
        } as State;
    }

    componentDidMount() {
        this.setState({
            chartData: lineChartData,
            chartOptions: lineChartOptions,
        });
    }

    render() {
        return (
            <Chart
                options={this.state.chartOptions}
                series={this.state.chartData}
                type='area'
                width='100%'
                height='100%'
            />
        );
    }
}

export default LineChart;
