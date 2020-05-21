import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SET_FILTERED_LESSONS } from 'src/store/actions';
import { Input } from 'semantic-ui-react';

const InputSearchLesson = () => {
  const dispatch = useDispatch();
  const { lessons } = useSelector((state) => state);
  // const lessonFiltered = lessons.filter((lesson) => lesson.title.indexOf(inputNav) !== -1);
  // test => gérer les maj

  const [value, setValue] = useState('');

  // useEffect(lessonFiltered, [inputNav]);


  return (
    <Input
      fluid
      className="input-topbar"
      icon="search"
      placeholder="rechercher un cours"
      onChange={(evt) => {
        setValue(evt.target.value);
        // dispatch({ type: SET_INPUT_NAV, payload: evt.target.value });
        const lessonFiltered = lessons.filter((lesson) => lesson.title.toLowerCase().indexOf(value.toLowerCase()) !== -1);
        dispatch({ type: SET_FILTERED_LESSONS, payload: lessonFiltered });
      }}
      value={value}
    />
  );
};

export default InputSearchLesson;

// test redux thunk
// dispatch({ type: SET_INPUT_NAV, payload: evt.target.value })
// .then(() => {
//   const lessonFiltered = lessons.filter((lesson) => lesson.title.indexOf(inputNav) !== -1);
//   dispatch({ type: SET_FILTERED_LESSONS, payload: lessonFiltered });
// });
