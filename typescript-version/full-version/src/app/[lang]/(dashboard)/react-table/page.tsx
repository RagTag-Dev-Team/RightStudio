// Component imports
import BasicDataTables from '@/views/react-table/BasicDataTables'
import EditableDataTables from '@/views/react-table/EditableDataTables'
import ColumnVisibility from '@/views/react-table/ColumnVisibility'
import RowSelection from '@/views/react-table/RowSelection'
import KitchenSink from '@/views/react-table/KitchenSink'

const Tables = () => {
  return (
    <>
      <h2>Basic Table</h2>
      <BasicDataTables />
      <h2>Editable Table</h2>
      <EditableDataTables />
      <h2>Toggle Column Visibility</h2>
      <ColumnVisibility />
      <h2>Row Selection</h2>
      <RowSelection />
      <h2>Kitchen Sink</h2>
      <KitchenSink />
    </>
  )
}

export default Tables
