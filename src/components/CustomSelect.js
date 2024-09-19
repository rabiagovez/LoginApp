import { useField } from 'formik'
import React from 'react'

function CustomSelect({label,...props}) {
    const [field,meta] = useField(props)    
    console.log(field)
    console.log(meta)

  return (
    <>
    <label>{label}</label>
    <select type='text' 
    {...field} 
    {...props} 
    className={meta.error ? 'inputError':''}/>
    
    {meta.error && <div className='error'>{meta.error}</div>}
    </>
  )
}

export default CustomSelect