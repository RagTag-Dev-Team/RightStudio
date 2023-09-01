// Component imports
import BasicDataTables from '@views/tables/BasicDataTables'
import EditableDataTables from '@views/tables/EditableDataTables'
import ColumnVisibility from '@views/tables/ColumnVisibility'
import RowSelection from '@views/tables/RowSelection'
import KitchenSink from '@views/tables/KitchenSink'

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
