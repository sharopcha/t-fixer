import React, { useState } from 'react';
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';
import { InputTextarea } from 'primereact/inputtextarea';
import { InputText } from 'primereact/inputtext';

const AddNewTaskForm = () => {
  const [selectedCity2, setSelectedCity2] = useState(null);
  const [selectedCity1, setSelectedCity1] = useState(null);
  const [date, setDate] = useState(null);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const cities = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' },
  ];

  const onCityChange2 = (e) => {
    setSelectedCity2(e.value);
  };

  const onCityChange = (e) => {
    setSelectedCity1(e.value);
  };

  return (
    <div className='add-new-task-form'>
      <div className='flex justify-content-between'>
        <div className=''>
          <Dropdown
            value={selectedCity2}
            options={cities}
            onChange={onCityChange2}
            optionLabel='name'
            editable
            placeholder='Subject'
          />
        </div>
        <div>
          <Dropdown
            className='full-w'
            value={selectedCity1}
            options={cities}
            onChange={onCityChange}
            optionLabel='name'
            placeholder='Type'
          />
        </div>
      </div>
      <div className='date-filed mt-4'>
        <h5 htmlFor='icon' className='mb-1'>
          Due Date
        </h5>
        <div>
          <Calendar
            id='icon'
            value={date}
            onChange={(e) => setDate(e.value)}
            showIcon
          />
        </div>
      </div>
      <div>
        <div className='title flex-1 mb-4 mt-4'>
          <h5 className='mb-2'>Title</h5>
          <div className='flex'>
            <div className='container-fluid'>
              <InputText
                id='in'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className='body'>
          <h5 className='mb-2'>Body</h5>
          <div>
            <InputTextarea
              rows={5}
              cols={30}
              value={body}
              onChange={(e) => setBody(e.target.value)}
              autoResize
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewTaskForm;
