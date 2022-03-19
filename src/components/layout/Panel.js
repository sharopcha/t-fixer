import { Button } from 'primereact/button';
import React, { useState } from 'react';
import Circle from '../Circle';
import FullDay from '../FullDay';
import { Dialog } from 'primereact/dialog';

const Panel = () => {
  const [displayMaximizable, setDisplayMaximizable] = useState(false);

  const onClick = () => setDisplayMaximizable(true);

  const onHide = () => setDisplayMaximizable(false);

  const renderFooter = () => {
    return (
      <div>
        <Button
          label='No'
          icon='pi pi-times'
          onClick={() => onHide()}
          className='p-button-text'
        />
        <Button
          label='Yes'
          icon='pi pi-check'
          onClick={() => onHide()}
          autoFocus
        />
      </div>
    );
  };

  return (
    <div className='panel'>
      <div>
        <FullDay />
        <div className='progress-bar-container p-bar-today'>
          <Circle labelTitle={'Classes'} />
          <Circle labelTitle={'Exams'} />
        </div>
      </div>
      <div className='new-task'>
        <div>
          <p>Tasks</p>
          <Button
            onClick={() => onClick()}
            label='New Task'
            className='p-button-raised p-button-success btn'
          />
        </div>
        <Circle labelTitle={'Tasks'} />
      </div>
      <div className='progress-bar-container p-bar-exams'>
        <p>Upcoming Exams</p>
        <Circle labelTitle={'Exams'} />
      </div>

      <Dialog
        header='Header'
        visible={displayMaximizable}
        maximizable
        modal
        style={{ width: '50vw' }}
        footer={renderFooter()}
        onHide={() => onHide()}
      >
        <p className='m-0'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </Dialog>
    </div>
  );
};

export default Panel;
