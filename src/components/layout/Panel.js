import { Button } from 'primereact/button';
import React, { useState } from 'react';
import Circle from '../Circle';
import AddNewTaskForm from '../forms/AddNewTaskForm';
import FullDay from '../FullDay';
import CustomDialog from './Dialog';

const Panel = () => {
  const [showDialog, setShowDialog] = useState(false);

  const onHide = () => setShowDialog(false);

  const datasets1 = [
    {
      data: [2, 5],
      backgroundColor: ['#c3c5c5', 'teal'],
      hoverBackgroundColor: ['#c3c5c5'],
    },
  ];

  const datasets2 = [
    {
      data: [4, 1],
      backgroundColor: ['red', 'orange'],
      hoverBackgroundColor: ['#c3c5c5'],
    },
  ];

  return (
    <div className='panel'>
      <div>
        <FullDay />
        <div className='progress-bar-container p-bar-today'>
          <Circle chartData={{ datasets: datasets1 }} labelTitle={'Classes'} />
          <Circle chartData={{ datasets: datasets2 }} labelTitle={'Exams'} />
        </div>
      </div>
      <div className='new-task'>
        <div>
          <p>Tasks</p>
          <Button
            onClick={() => setShowDialog(true)}
            label='New Task'
            className='p-button-raised p-button-success btn'
            icon='pi pi-plus'
          />
        </div>
        <Circle labelTitle={'Tasks'} />
      </div>
      <div className='progress-bar-container p-bar-exams'>
        <p>Upcoming Exams</p>
        <Circle labelTitle={'Exams'} />
      </div>
      <CustomDialog
        isVisibile={showDialog}
        hideDialog={onHide}
        header={'Header'}
        body={<AddNewTaskForm />}
      />
    </div>
  );
};

export default Panel;
