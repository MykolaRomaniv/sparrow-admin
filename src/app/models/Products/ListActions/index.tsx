import {
  CreateButton,
  ExportButton,
  FilterButton,
  TopToolbar,
} from "react-admin"
import { ImportButton } from "react-admin-import-csv"

const ListActions = (props: any) => (
  <TopToolbar>
    <FilterButton />
    <CreateButton />
    <ExportButton />
    <ImportButton
      {...props}
      // TODO
      transformRows={(rows: any) => rows}
    />
  </TopToolbar>
)

export default ListActions
