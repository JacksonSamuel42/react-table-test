import React from 'react'
import {useAsyncDebounce} from 'react-table'

const GlobalFilter = ({filter, setFilter}) => {
  // const [value, setValue] = React.useState(filter)

  // const onChange = useAsyncDebounce((value) => {
  //   setFilter(value || undefined)
  // }, 1000)
  return (
    <span>
        Search {' '}
        <input 
            type="text" 
            value={filter || ''} 
            onChange={({target}) => {
              // setValue(target.value),
              setFilter(target.value)
            }}
        />
    </span>
  )
}

export default GlobalFilter