import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Icon, Label } from 'semantic-ui-react';
import { DELETE_CATEGORY_LABEL } from '../../store/actions';


const LabelCategory = ({ lessonId, teacherId }) => {
  const { lessonInfo, userId } = useSelector((state) => state);
  const { categoryInfo } = lessonInfo;
  if (categoryInfo === undefined) {
    return null;
  }
  const categoryJSX = categoryInfo.map((category) => {
    const dispatch = useDispatch();
    const handleClick = (e) => {
      const categoryId = e.target.getAttribute('data-key');
      dispatch({
        type: DELETE_CATEGORY_LABEL,
        payload:
         {
           categoryId,
           lessonId,
         },
      });
    };
    let iconJSX = '';
    if (userId === teacherId) {
      iconJSX = (
        <Icon
          onClick={handleClick}
          name="delete"
          key={category.category_id}
          data-key={category.category_id}
        />
      );
    }
    return (
      <Label image>
        <img src="https://react.semantic-ui.com/images/avatar/small/ade.jpg" />
        {category.name}
        {iconJSX}
      </Label>
    );
  });
  return (
    <div>
      {categoryJSX}
    </div>
  );
};

LabelCategory.propTypes = {
  lessonId: PropTypes.number,
  teacherId: PropTypes.number,
};

export default LabelCategory;
