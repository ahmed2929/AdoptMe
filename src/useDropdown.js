import React ,{useState} from 'react'

const useDropDown=(lable,defulatState,options)=>{
    const [state,setState]=useState(defulatState)
    const id=`dropdown-lis ${lable.replace(" ","").toLowerCase()}`
    
        const Dropdown = () => (
            <label htmlFor={id}>
              {lable}
              <select
                id={id}
                value={state}
                onChange={e => setState(e.target.value)}
                onBlur={e => setState(e.target.value)}
                disabled={!options.length}
              >
                
                <option>ALL</option>
                {options.map(item => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </label>
          );
    
    
    return [state,Dropdown,setState]

}
export default useDropDown;