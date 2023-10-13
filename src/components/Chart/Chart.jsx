import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);
const Chart = ({ dataDoughnut }) => {
  return (
    <div>
      <Doughnut
        style={{
          display: 'flex',
          width: '336px',
          height: '336px',
          marginTop: '20px',
        }}
        data={dataDoughnut}
      />
    </div>
  );
};

export default Chart;
