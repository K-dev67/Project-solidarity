
regarder les paquets
- sanitize
- multer
- morgan
https://github.com/O-clock-Bifrost/okanban-SimonMARTIN87/blob/master/index.js <= server.js de Simon le kanban

pouvoir supprimer un compte user



// == test Max

// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import PropTypes from 'prop-types';
// import { Icon, Label } from 'semantic-ui-react';
// import { DELETE_CATEGORY_LABEL } from '../../store/actions';


// const LabelCategory = ({ lessonId, teacherId }) => {
//   const dispatch = useDispatch();
//   const { lessonInfo, userId } = useSelector((state) => state);
//   const { categoryInfo } = lessonInfo;
//   if (categoryInfo === undefined) {
//     return null;
//   }

//   const categoryJSX = () => {
//     categoryInfo.map((category) => {
//       // == fct pour qui réagit au handleClick
//       const handleClick = (e) => {
//         const categoryId = e.target.getAttribute('data-key');
//         dispatch({
//           type: DELETE_CATEGORY_LABEL,
//           payload:
//            {
//              categoryId,
//              lessonId,
//            },
//         });
//       };
//       // == icone de la croix pour remove category
//       let iconJSX = '';
//       if (userId === teacherId) {
//         iconJSX = (
//           <Icon
//             onClick={handleClick}
//             name="delete"
//             key={category.category_id}
//             data-key={category.category_id}
//           />
//         );
//       }
//       return (
//         <Label image>
//           <img src="https://react.semantic-ui.com/images/avatar/small/ade.jpg" />
//           {category.name}
//           {iconJSX}
//         </Label>
//       );
//     });
//   };
//   useEffect(categoryJSX(), [categoryInfo]);
//   return (
//     <div>
//       {categoryJSX}
//     </div>
//   );
// };

// LabelCategory.propTypes = {
//   lessonId: PropTypes.number,
//   teacherId: PropTypes.number,
// };

// export default LabelCategory;

