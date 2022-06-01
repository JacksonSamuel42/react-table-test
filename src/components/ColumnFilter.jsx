import React from 'react'

const ColumnFilter = ({ column }) => {
  const { filterValue, setFilter } = column
  return (
    <span>
      Search {' '}
      <input
        type="text"
        value={filterValue || ''}
        onChange={({ target }) => setFilter(target.value)}
      />
    </span>
  )
}

export default ColumnFilter