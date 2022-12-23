import React from 'react'
import featureImg from "../../../images/Feature-logo.png";
import wayaImg from "../../../images/waya-en-white.png";
import menaImg from "../../../images/mena-bytes.png";
import alkanz from "../../../images/alkanz.png";
import shabkt from "../../../images/shabkt.png";
import "../../../Components/Home/Features/features.css";

function FeaturesBrand() {
  return (
    <div className='container-fluid mt-5 mb-5 pt-5 pb-5'>
      <div className="feature-heading">
        <h5 >As featured on</h5>
      </div>
      <div className="feature-images">

        <img src={featureImg} alt="" style={{width:"120px"}} className='feature-img-1' srcset="" />
        <img src={shabkt} alt="" setyle="" style={{width:"120px"}} className='feature-img-1' />
        <img src={wayaImg} alt="" style={{width:"120px"}} className='feature-img-1' srcset="" />
        <img src={menaImg} alt="" style={{width:"120px"}} className='feature-img-1' srcset="" />
        <img src={alkanz} alt="" style={{width:"120px"}} className='feature-img-1' srcset="" />
      </div>
    </div>
  )
}

export default FeaturesBrand
