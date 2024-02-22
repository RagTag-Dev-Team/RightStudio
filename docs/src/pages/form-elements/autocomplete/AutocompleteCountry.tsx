// Components Imports
import CustomAutocomplete from '@core/components/mui/autocomplete'
import CustomTextField from '@core/components/mui/text-field'

// Data Imports
import { countries } from '../../../data/countries'

type CountryType = {
  code: string
  label: string
  phone: string
}

const AutocompleteCountry = () => {
  return (
    <CustomAutocomplete
      autoHighlight
      id='autocomplete-country-select'
      options={countries as CountryType[]}
      getOptionLabel={option => option.label || ''}
      renderOption={(props, option) => (
        <li {...props} key={option.label}>
          <img
            key={option.code}
            className='mie-4 flex-shrink-0'
            alt=''
            width='20'
            loading='lazy'
            src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
            srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
          />
          {option.label} ({option.code}) +{option.phone}
        </li>
      )}
      renderInput={params => (
        <CustomTextField
          {...params}
          label='Choose a country'
          inputProps={{
            ...params.inputProps,
            autoComplete: 'new-password'
          }}
        />
      )}
    />
  )
}

export default AutocompleteCountry
