import React from 'react';
import Panel from '../components/layout/Panel';

const Home = () => {
  return (
    <div className='home'>
      <Panel />
      <div className='home-container'>
        <div className='today-classes'></div>
        <div className='task'></div>
        <div className='upcoming-exams'></div>
      </div>
    </div>
  );
};

export default Home;
