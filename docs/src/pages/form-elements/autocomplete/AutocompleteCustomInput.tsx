// Components Imports
import CustomAutocomplete from '@core/components/mui/autocomplete'
const options = ['Option 1', 'Option 2']

const AutocompleteCustomInput = () => {
  return (
    <CustomAutocomplete
      options={options}
      id='autocomplete-custom-input'
      renderInput={params => (
        <div ref={params.InputProps.ref}>
          <input type='text' {...params.inputProps} />
        </div>
      )}
      className='inline-block'
      sx={{
        '& input': {
          width: 200,
          borderWidth: 2,
          backgroundColor: 'background.paper',
          color: 'theme => theme.palette.getContrastText(theme.palette.background.paper)'
        }
      }}
    />
  )
}

export default AutocompleteCustomInput
