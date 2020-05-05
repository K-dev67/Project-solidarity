import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SET_INPUT_NAV } from 'src/store/actions';
import { Input } from 'semantic-ui-react';

const InputSearchLesson = () => {
  const dispatch = useDispatch();
  const { inputNav } = useSelector((state) => state);

  console.log('inputSearchLesson');
  return (
    <Input
      fluid
      className="input-topbar"
      icon="search"
      placeholder="rechercher un cours"
      onChange={(evt) => {
        dispatch({ type: SET_INPUT_NAV, payload: evt.target.value });
      }}
      value={inputNav}
    />
  );
};

export default InputSearchLesson;
