import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Icon, Label } from 'semantic-ui-react';
import { DELETE_CATEGORY_LABEL } from '../../store/actions';


const LabelCategory = ({ lessonId }) => {
  const { lessonInfo } = useSelector((state) => state);
  // console.log(lessonInfo);
  // const infoLesson = lessonInfo.lessonInfo;
  const { categoryInfo } = lessonInfo;
  // console.log('infoLesson', infoLesson);
  console.log('categoryInfo', categoryInfo);
  if (categoryInfo === undefined) {
    return null;
  }
  const categoryJSX = categoryInfo.map((category) => {
    const dispatch = useDispatch();
    // console.log('category.name', category.name);

    const handleClick = (e) => {
      // console.log('cliqué');
      // console.log('e.target', e.target.getAttribute('data-key'));
      const categoryId = e.target.getAttribute('data-key');
      // console.log('lessonId', lessonId);
      dispatch({
        type: DELETE_CATEGORY_LABEL,
        payload:
         {
           categoryId,
           lessonId,
         },
      });
    };
    return (
      <Label image>
        <img src="https://react.semantic-ui.com/images/avatar/small/ade.jpg" />
        {category.name}
        <Icon
          onClick={handleClick}
          name="delete"
          key={category.category_id}
          data-key={category.category_id}
        />
      </Label>
    );
  });
  return (
    <div>
      {categoryJSX}
    </div>
  );
};

LabelCategory.PropTypes = {
  lessonId: PropTypes.number,
};

export default LabelCategory;
