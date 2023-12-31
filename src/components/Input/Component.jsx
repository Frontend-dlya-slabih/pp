import './styles.css'
export const Input = ({label,placeholder,type}) => {
    return (
        <div>
            {type==='email'&&<div>
                    <label className='label__text' >{label}<span className='star'>*</span><input placeholder={placeholder} required className="input" type={type} /></label>
            </div>}
            {type==='password'&&<div>
                    <label className='label__text'>{label}<span className='star'>*</span><input placeholder={placeholder} required className="input" type={type} /></label>
            </div>}
            {type==='number'&&<div>
                    <label className='label__text'>{label}<span className='star'>*</span><input placeholder={placeholder} required className="input" type={type} /></label>
            </div>}
            {type==='text'&&<div>
                    <label className='label__text'>{label}<span className='star'>*</span><input placeholder={placeholder} required className="input" type={type} /></label>
            </div>}
            {type==='checkbox'&&<div>
                    <label>{label}<input type={type} /></label>
            </div>}
        </div>
    )
}       