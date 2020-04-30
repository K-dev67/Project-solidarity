import React from 'react';

// == style
import './styles.scss';

const HowItWorksPresentation = () => {

    return (
        <div className="HowItWorksPresentation_container">
            <h2>Comment ça fonctionne ?</h2>
            <div className="HowItWorksPresentation_main">
                <div className="HowItWorksPresentation_content">
                    <p>
                        odfugofhogiudf ghodufiodhiuoiudih uodiuhioduihodu hihuopiuihduophup gggr rezhrhh rztryzrzy yzytrz yzyzry zyzryz zyzyrzyz zyzyrzyrdfyter rezyryyz yzrrzy zyzyz
                    </p>
                    <img src={img1}></img>
                </div>
                <div className="HowItWorksPresentation_content">
                    <img src={img2}></img>
                    <p>
                        odfugofhogiudf ghodufiodhiuoiudih uodiuhioduihodu hihuopiuihduophup gggr rezhrhh rztryzrzy yzytrz yzyzry zyzryz zyzyrzyz zyzyrzyrdfyter rezyryyz yzrrzy zyzyz
                    </p>
                </div>
            </div>
        </div>
    );
};

const img1 = "https://static.lexpress.fr/medias_11575/w_1831%2Ch_1024%2Cc_crop%2Cx_130%2Cy_0/w_640%2Ch_360%2Cc_fill%2Cg_north/v1502108074/3449-code-of-ethics-in-technology_5926532.jpg";

const img2 = "https://www.aksis.fr/wp-content/uploads/2018/11/Aksis-Evolutis-accompagnement-carri%C3%A8re-de-vos-collaborateurs-1024x576.jpg";

export default HowItWorksPresentation;