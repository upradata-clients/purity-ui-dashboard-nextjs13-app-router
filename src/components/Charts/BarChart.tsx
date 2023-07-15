// use client

import { Component } from 'react';
import { barChartData, barChartOptions } from '@/variables/charts';
import type { ApexOptions } from 'apexcharts';
import { Card } from '@chakra-ui/card';
import dynamic from 'next/dynamic';

const Chart = dynamic(() => import('react-apexcharts'), { loading: () => <p>Loading...</p> });

type State = {
    chartData: ApexOptions[ 'series' ];
    chartOptions: ApexOptions;
};

class BarChart extends Component<{}, State> {
    constructor(props: React.PropsWithChildren) {
        super(props);
        this.state = {
            chartData: [] as [],
            chartOptions: {},
        } as State;
    }

    componentDidMount() {
        this.setState({
            chartData: barChartData,
            chartOptions: barChartOptions,
        });
    }

    render() {
        return (
            <Card
                py='1rem'
                height={{ sm: '200px' }}
                width='100%'
                bg='linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%)'
                position='relative'
            >
                <Chart
                    plotOptions={this.state.chartOptions}
                    series={this.state.chartData}
                    type='bar'
                    width='100%'
                    height='100%'
                />
            </Card>
        );
    }
}

export default BarChart;
