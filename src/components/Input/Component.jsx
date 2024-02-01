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
        <>
            {type==='email'&&<>
                <label className='label__text' >{label}<span className='star'>*</span>
                    <input 
                        placeholder={placeholder} 
                        required 
                        className="input" 
                        type={type} 
                    />
                </label>
            </>}
            {type==='password'&&<>
                <label className='label__text'>{label}<span className='star'>*</span>
                <div className='show__close__img'><label className='show__hide__eye' onClick={handleShow}>{show?<img alt='open' src={Eye_Open} />:<img alt='close' src={Eye_Close} />}</label></div>
                    <input 
                        placeholder={placeholder} 
                        required 
                        className="input" 
                        type={show?"text":"password"} 
                    />
                    
                </label>
            </>}
            {type==='number'&&<>
                <label className='label__text'>{label}<span className='star'>*</span>
                    <input 
                        placeholder={placeholder}                                                                           
                        required 
                        className="input" 
                        type={type} 
                    />
                </label>
            </>}
            {type==='text'&&<>
                <label className='label__text'>{label}<span className='star'>*</span>
                    <input 
                        placeholder={placeholder} 
                        required 
                        className="input" 
                        type={type} 
                    />
                </label>
            </>}
            {type==='checkbox'&&<div>
                <input 
                        type={type}
                        className="Check__box" 
                    />
                <label className='Check__box__text'>{label}</label>
            </div>}
        </>
    )
}                               