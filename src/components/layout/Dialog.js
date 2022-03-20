import React, { useEffect, useState } from 'react';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';

const CustomDialog = ({ isVisibile = false, hideDialog, header, body }) => {
  const [displayMaximizable, setDisplayMaximizable] = useState(false);

  useEffect(() => {
    setDisplayMaximizable(isVisibile);
  }, [isVisibile]);

  return (
    <div className='dialog'>
      <Dialog
        header={header}
        visible={displayMaximizable}
        maximizable
        modal
        style={{ width: '40vw' }}
        footer={renderFooter({ hideDialog })}
        onHide={hideDialog}
      >
        {body}
      </Dialog>
    </div>
  );
};

const renderFooter = ({ hideDialog }) => {
  return (
    <>
      <Button
        label='No'
        icon='pi pi-times'
        onClick={hideDialog}
        className='p-button-text'
      />
      <Button label='Yes' icon='pi pi-check' onClick={hideDialog} autoFocus />
    </>
  );
};

export default CustomDialog;
