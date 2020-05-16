import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Confirm } from 'semantic-ui-react';
import { DELETE_ASK_LESSON } from '../../store/actions';


const ConfirmDelete = ({ askLesson }) => {
  const dispatch = useDispatch();
  console.log('confirm delete');
  const handleDelete = () => {
    dispatch({ type: DELETE_ASK_LESSON, payload: askLesson.id });
  };
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => {
        setOpen(true);
      }}
      >Supprimer
      </Button>
      <Confirm
        open={open}
        onCancel={() => {
          setOpen(false);
        }}
        onConfirm={() => {
          setOpen(false);
        }}
        onClick={handleDelete}
      />
    </div>
  );
};


export default ConfirmDelete;
