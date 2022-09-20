import React from 'react'
import { FBPictureOne } from '../../../images/images';
import './portraitWithText.scss';

export default function PortraitWithText() {
  return (
    <div className="portraitWithTextContainer">
        <div className="personalNameContainer">
            <span className="personalNameFirst">
            Frederic
            </span>
            <span className="personalNameSecond">
            Bierbaum
            </span>
        </div>
        <div className="personalNameWebContainer">
            <span className="personalNameWebFirst">
                FULLSTACK WEB
            </span>
            <span className="personalNameWebSecond">
                DEVELOPER
            </span>
        </div>
        <img id="profilePictureOne"src={FBPictureOne}/>
        </div>
  )
}
