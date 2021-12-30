import {
  Create,
  Datagrid,
  Edit,
  EditButton,
  List,
  NumberInput,
  SimpleForm,
  TextField,
  TextInput,
} from "react-admin"

export const ClientsList = (props: any): JSX.Element => (
  <List {...props}>
    <Datagrid>
      <TextField source="name" />
      <TextField source="email" />
      <TextField source="phone" />
      <TextField source="balance" />
      <EditButton />
    </Datagrid>
  </List>
)

export const ClientsEdit = (props: any): JSX.Element => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="email" />
      <TextInput source="phone" />
      <NumberInput source="balance" />
    </SimpleForm>
  </Edit>
)

export const ClientsCreate = (props: any): JSX.Element => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="email" />
      <TextInput source="phone" />
      <NumberInput source="balance" />
    </SimpleForm>
  </Create>
)
