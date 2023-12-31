import './styles.css'
import React, { useState } from "react";
import Eye_Close from '../img/eye-frame.svg'
import Eye_Open from '../img/Eye-Open.svg'


export const Input = ({label,placeholder,type}) => {


    const [show,setShow]=useState(false)
    const handleShow=()=>{
        setShow(!show)
    }

return (
        <div>
            {type==='email'&&<div>
                <label className='label__text' >{label}<span className='star'>*</span>
                    <input 
                        placeholder={placeholder} 
                        required 
                        className="input" 
                        type={type} 
                    />
                </label>
            </div>}
            {type==='password'&&<div>
                <label className='label__text'>{label}<span className='star'>*</span>
                <label className='show__hide__eye' onClick={handleShow}>{show?<img src={Eye_Open} />:<img src={Eye_Close} />}</label>
                    <input 
                        placeholder={placeholder} 
                        required 
                        className="input" 
                        type={show?"text":"password"} 
                    />
                    
                </label>
            </div>}
            {type==='number'&&<div>
                <label className='label__text'>{label}<span className='star'>*</span>
                    <input 
                        placeholder={placeholder}                                                                           
                        required 
                        className="input" 
                        type={type} 
                    />
                </label>
            </div>}
            {type==='text'&&<div>
                <label className='label__text'>{label}<span className='star'>*</span>
                    <input 
                        placeholder={placeholder} 
                        required 
                        className="input" 
                        type={type} 
                    />
                </label>
            </div>}
            {type==='checkbox'&&<div>
                <input 
                        type={type}
                        className="Check__box" 
                    />
                <label className='Check__box__text'>{label}</label>
            </div>}
        </div>
    )
}                               