import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SET_INPUT_NAV, SET_FILTERED_LESSONS } from 'src/store/actions';
import { Input } from 'semantic-ui-react';

const InputSearchLesson = () => {
  const dispatch = useDispatch();
  const { inputNav, lessons } = useSelector((state) => state);
  // == pour filtrer les leçons en fonction des touches du clavier
  // pour filtrer les pokemons en fonction des touches du clavier..
  console.log('lessons', lessons);
  const lessonFiltered = lessons.filter((lesson) => lesson.title.indexOf(inputNav) !== -1);
  console.log('lessonFiltered', lessonFiltered);

  return (
    <Input
      fluid
      className="input-topbar"
      icon="search"
      placeholder="rechercher un cours"
      onChange={(evt) => {
        dispatch({ type: SET_INPUT_NAV, payload: evt.target.value });
        dispatch({ type: SET_FILTERED_LESSONS, payload: lessonFiltered });
      }}
      value={inputNav}
    />
  );
};

export default InputSearchLesson;
