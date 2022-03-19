import { Button } from 'primereact/button';
import React from 'react';
import Circle from '../Circle';
import FullDay from '../FullDay';

const Panel = () => {
  return (
    <div className='panel'>
      <div>
        <FullDay />
        <div className='progress-bar-container p-bar-today'>
          <Circle />
          <Circle />
        </div>
      </div>
      <div className='new-task'>
        <div>
          <p>Tasks</p>
          <Button
            label='New Task'
            className='p-button-raised p-button-success btn'
          />
        </div>
        <Circle />
      </div>
      <div className='progress-bar-container p-bar-exams'>
        <p>Upcoming Exams</p>
        <Circle />
      </div>
    </div>
  );
};

export default Panel;
