import React from 'react';

// == style
import './styles.scss';

const TopLessonsPresentation = () => {
    const TopCours = fauxCours.map((cour) => {
        return (
            <div key={cour.id} className="TopLessonsPresentation_Card">
                <img src={cour.teacher_avatar}></img>
                <h4>{cour.teacher_id}</h4>
                <p>{cour.description} </p>
            </div>
        )
    })
    return (
        <div className="TopLessonsContainer">
            <h2>Cours les mieux notés</h2>
            <div className="TopLessonsPresentation_container">
                <div className="TopLessonsPresentation_container_card"></div>
                {TopCours}
            </div>
        </div>
    );
};

//"title", "description","level", "teacher_id", "plannified", "status"

const fauxCours = [
    { id: 1, title: "Javascript", description: "cours complet Javascript ES6", teacher_id: "Anthony", teacher_avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSyalOicjSEpYodgWxemjYhuBZ3GeSuEGbRZzVWJoWXVPbXqPHH&usqp=CAU" },
    { id: 2, title: "React", description: "cours complet sur React / Redux", teacher_id: "Jean-Denis", teacher_avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQGt4EM_r-2oqcLhC7uP2o9PUKz52DB7O1Efg7JGuxk2VWJcty9&usqp=CAU" },
    { id: 3, title: "Data/SQL", description: "cours Data en javascript", teacher_id: "Kevin", teacher_avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSKbRH4Jh9B0D6CXyNByqqfuoKXwcbYsSkHoFwp6fsHabi1cygm&usqp=CAU" },
    { id: 4, title: "Les divisions", description: "Petit cours sur les divisions mathematique", teacher_id: "Samy", teacher_avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT8wvd_Id1I40Xzuse5dBaTpypBpfFAHp0y5ruHFnNlOKhkCEic&usqp=CAU" },
    { id: 5, title: "NodeJS", description: "cours technologie Node JS", teacher_id: "Simon", teacher_avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQGt4EM_r-2oqcLhC7uP2o9PUKz52DB7O1Efg7JGuxk2VWJcty9&usqp=CAU" },
    { id: 6, title: "Francais", description: "cours revisions francais grammaire", teacher_id: "Alexi", teacher_avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQGt4EM_r-2oqcLhC7uP2o9PUKz52DB7O1Efg7JGuxk2VWJcty9&usqp=CAU" },
    { id: 7, title: "Html/Css/Javascript", description: "Revision les bases du Web", teacher_id: "Tony", teacher_avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRThBSUZ1GFF_lB9loNha1PS-wPB4mOTfij9AfhgnPuVBqm5pAP&usqp=CAU" },
    { id: 8, title: "Troll", description: "Comment troller tout le monde ", teacher_id: "Chris", teacher_avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQGt4EM_r-2oqcLhC7uP2o9PUKz52DB7O1Efg7JGuxk2VWJcty9&usqp=CAU" },
]

export default TopLessonsPresentation;