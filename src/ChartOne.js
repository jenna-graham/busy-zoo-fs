import { withThemeCreator } from '@material-ui/styles';
import { color } from '@mui/system';
import React from 'react';
import { VictoryBar, VictoryChart, VictoryAxis } from 'victory';


const data = [
  { job: 1, earnings: 78000 },
  { job: 2, earnings: 105000 },
  { job: 3, earnings: 155000 },
  { job: 4, earnings: 230000 }
];
export default function ChartOne() {
  return (
    <div className="chart-one">
      <VictoryChart
        style={{
          background: { fill: 'white' },
          
        }}
      
        domainPadding={20}>
        <VictoryAxis 
          tickValues={[1, 2, 3, 4]}
          tickFormat={['Job 1', 'Job 2', 'Job 3', 'Job 4']} />
        <VictoryAxis
          dependentAxis 
          tickFormat={(x) => (`$${x / 1000}k`)} 
        />
        <VictoryBar
          data={data}
          x="job"
          y="earnings"
        />
      </VictoryChart>
    </div>
  );
}
