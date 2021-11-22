import React, {useEffect, useState} from 'react';
import '../css/Loader.css';
import '../css/style.css';
import loaderIcon from '../assets/Images/cog-solid.svg';



export default(props) => {

   

    return (
       
        <div className="loaderContainer text-center">
        <div className="loader center ">
            {/* <i className="fa fa-cog fa-spin ml-2" style={{color:"#c55a11", fontSize: "75px"}} /> */}
            {/* <div className="h4 font-weight-bold" style={{color:"#c55a11"}}>Loading...</div> */}
            
            <img className='spin-loader' src={loaderIcon} height='100' width='100' style={{color:"#c55a11", fontSize: "75px", alignSelf:'center'}}></img>
      
            
        
        </div>
        </div>
            
    );

}
