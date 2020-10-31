import React, { useState } from 'react';

import './Nav.scss';

function Nav() {
    const [isHover , setHover] = useState(false);

    return (
        <div className="nav-class">
          <div className="first-nav-div">
            <span className={isHover? "female" : "women-span"}  onMouseEnter= {() => setHover(true)} onMouseLeave={() => setHover(false)}> Women </span>
            <span className="men-span"> Men</span>
            <span className="denim-span">Denim</span>
            <span className="about-span">About</span>
          </div>
          <span className="hhh">London</span>
          <div className="second-nav-div">
            <span> Log In</span>
            <span>Sign Up</span>
          </div>

          <div className={ !isHover ?"woman-div-hidden" : "woman-div-show"} onMouseEnter= {() => setHover(true)} onMouseLeave={() => setHover(false)}>
          <div>
                <ul>
                    <li>
                        Feature
                    </li>
                    <li>
                        New Arrives
                    </li> <li>
                        Best-Sellers
                    </li> <li>
                        100% Human
                    </li> <li>
                        The Demnim Guide
                    </li> <li>
                        Face Mask
                    </li> <li>
                        The More Collaction
                    </li> <li>
                        Sale
                    </li>
                </ul>
            </div>

            <div>
                <ul>
                    <li>
                        Feature
                    </li>
                    <li>
                        New Arrives
                    </li> <li>
                        Best-Sellers
                    </li> <li>
                        100% Human
                    </li> <li>
                        The Demnim Guide
                    </li> <li>
                        Face Mask
                    </li> <li>
                        The More Collaction
                    </li> <li>
                        Sale
                    </li> 
                </ul>
            </div>

            <div>
                <ul>
                    <li>
                        Feature
                    </li>
                    <li>
                        New Arrives
                    </li> <li>
                        Best-Sellers
                    </li> <li>
                        100% Human
                    </li> <li>
                        The Demnim Guide
                    </li> <li>
                        Face Mask
                    </li> <li>
                        The More Collaction
                    </li> <li>
                        Sale
                    </li>
                </ul>
            </div>

          </div>
            
    
    </div>

    );
}

export default Nav;