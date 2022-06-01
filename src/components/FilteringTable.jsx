import React from 'react'
import { useTable, useGlobalFilter, useFilters } from 'react-table'
import MOCK_DATA from './MOCK_DATA.json'
import { COLUMNS } from './columns'
import GlobalFilter from './GlobalFilter'
import './table.css'
import ColumnFilter from './ColumnFilter'

const FilteringTable = () => {
    const columns = React.useMemo(() => COLUMNS, [])
    const data = React.useMemo(() => MOCK_DATA, [])

    const defaultColumn = React.useMemo(() => {
        return {
            Filter: ColumnFilter
        }
    }, [])

    const tableInstance = useTable({
        columns,
        data,
        defaultColumn
    }, useGlobalFilter, useFilters)

    const {
        getTableBodyProps,
        getTableProps,
        headerGroups,
        footerGroups,
        rows,
        prepareRow,
        state,
        setGlobalFilter
    } = tableInstance

    const { globalFilter } = state

    return (
        <>
            <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
            <table {...getTableProps()}>
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps()}>
                                    {column.render('Header')}
                                    <div>{column.canFilter ? column.render('Filter') : null}</div>
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map(row => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    return (
                                        <td {...cell.getCellProps()}>
                                            {cell.render('Cell')}
                                        </td>
                                    )
                                })}
                            </tr>
                        )
                    })}
                </tbody>
                <tfoot>
                    {footerGroups.map(footerGroup => (
                        <tr {...footerGroup.getFooterGroupProps()}>
                            {footerGroup.headers.map(column => (
                                <td {...column.getFooterProps()}>
                                    {column.render('Footer')}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tfoot>
            </table>
        </>
    )
}

export default FilteringTable