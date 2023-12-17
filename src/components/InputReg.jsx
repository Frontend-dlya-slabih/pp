import './inputReg.css'
export function InputReg({label,placeholder,type}) {
    return (
        <div>
            {type==='email'&&<div>
                    <label>{label}<span className='star'>*</span><input placeholder={placeholder} required className="input" type={type} /></label>
            </div>}
            {type==='password'&&<div>
                    <label>{label}<span className='star'>*</span><input placeholder={placeholder} required className="input" type={type} /></label>
            </div>}
            {type==='number'&&<div>
                    <label>{label}<span className='star'>*</span><input placeholder={placeholder} required className="input" type={type} /></label>
            </div>}
            {type==='text'&&<div>
                    <label>{label}<span className='star'>*</span><input placeholder={placeholder} required className="input" type={type} /></label>
            </div>}
        </div>
    )
}       