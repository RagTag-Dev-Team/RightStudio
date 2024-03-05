// React Imports
import { ChangeEvent, useState } from 'react'

// Component Imports
import CustomTextField from '@core/components/mui/TextField'

const TextareaCustom = () => {
  // State
  const [value, setValue] = useState<string>('Controlled')

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  return (
    <form className='flex gap-6'>
      <CustomTextField
        multiline
        maxRows={4}
        value={value}
        label='Multiline'
        onChange={handleChange}
        id='textarea-outlined-controlled'
      />
      <CustomTextField multiline id='textarea-outlined' placeholder='Placeholder' label='Multiline Placeholder' />
      <CustomTextField
        rows={4}
        multiline
        label='Multiline'
        defaultValue='Default Value'
        id='textarea-outlined-static'
      />
    </form>
  )
}

export default TextareaCustom
