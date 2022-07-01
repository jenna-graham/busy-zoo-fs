
import React from 'react';
import { VictoryPie, } from 'victory';


const data = [
  { x: '📚', y: 60 },
  { x: '👩🏽‍💻', y: 400 },
  { x: '💃🏽', y: 60 },
  { x: '🧘🏽‍♀️', y: 60 },
  { x: '😴', y: 380 },
  { x: '🍽', y: 180 }

];
export default function ChartOne() {
  return (
    <div className="chart-one">
      <VictoryPie
        colorScale={['rgb(179, 221, 28)', 'rgb(40, 118, 51)', 'rgb(165, 122, 42)', 'rgb(221, 205, 28)', 'rgb(121, 106, 62)', 'rgb(17, 33, 4)']}
        data={data}
        style={{
          data: {
            fillOpacity: 0.8, stroke: 'black', strokeWidth: 1
          }
        }}
      />
    </div>
  );
}
