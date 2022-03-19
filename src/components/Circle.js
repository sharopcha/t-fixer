import React from 'react';
import { Chart } from 'primereact/chart';

const Circle = () => {
  let chartData = {
    datasets: [
      {
        data: [4, 1, 3, 7],
        backgroundColor: ['#FF6384', '#eb9e0c', '#065109', '#eb9e0c'],
        hoverBackgroundColor: ['#FF6384', '#FA4344', '#FF6384', '#FA6384'],
      },
    ],
  };

  const lightOptions = {
    plugins: {
      tooltip: {
        enabled: false,
      },
    },

    responsive: true,
    cutout: '85%',
    maintainAspectRatio: true,
  };

  return (
    <div className='progress-bar'>
      <Chart
        height='50px'
        width='100px'
        className='chart'
        type='doughnut'
        data={chartData}
        options={lightOptions}
        style={{ position: 'relative' }}
      />
      <div className='label'>
        <span className='label-number'>2</span>
        <span className='label-title'>Classes</span>
      </div>
    </div>
  );
};

export default Circle;
