import React from 'react'
import './navigation.scss';
import { BurgerIcon } from '../../../images/images';
export default function Navigation() {
  return (
    <div className="navigationContainer">
        <div className="leftNavSide">
            <span>
                Frederic Bierbaum
            </span>
            <span>
                Located in Hamburg
            </span>
        </div>
        <img id='burger-icon' src={BurgerIcon}/>
    </div>
  )
}
