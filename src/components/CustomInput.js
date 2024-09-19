import { useField } from 'formik'
import React from 'react'

function CustomInput({label,...props}) {
    const [field,meta] = useField(props)    
    console.log(field)
    console.log(meta)

  return (
    <>
    <label>{label}</label>
    <input type='text' {...field} {...props} className={meta.error ? 'inputError':''}/>
    
    {meta.error && <div className='error'>{meta.error}</div>}
    </>
  )
}

export default CustomInput