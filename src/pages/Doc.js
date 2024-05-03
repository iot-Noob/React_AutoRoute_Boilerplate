// Doc.js
import React from 'react';
import MdReader from '../component/MdReader';
import readmeContent from '../component/mdcontent';
 

const Doc = () => {
  return (
    <div className='container'>
        <div className='row'>
         
            <div className='col col-sm-4'>
 
            <MdReader content={readmeContent} />
            </div>
        </div>
    </div>
  );
};

export default Doc;
