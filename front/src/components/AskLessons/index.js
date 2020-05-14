import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// == style
import './styles.scss';
import axios from 'axios';
import { API_URL } from '../../utils/constante';
import { SET_ASK_LESSONS } from '../../store/actions';


const AskLessons = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get(`${API_URL}/askList`)
      .then((res) => {
        dispatch({ type: SET_ASK_LESSONS, payload: res.data });
      });
  },
  []);
  const { askLessons } = useSelector((state) => state);
  const askLessonsJSX = askLessons.map((asklesson) => {
    console.log('asklesson', asklesson);
  });
  return (
    <div className="askLessons">
      Faire une demande de cours
    </div>
  );
};


export default AskLessons;
