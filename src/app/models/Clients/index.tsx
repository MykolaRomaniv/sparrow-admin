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

export enum Clients {
  id = "id",
  name = "name",
  email = "email",
  phone = "phone",
  balance = "balance",
}

export const ClientsList = (props: any): JSX.Element => (
  <List {...props}>
    <Datagrid>
      <TextField source={Clients.name} />
      <TextField source={Clients.email} />
      <TextField source={Clients.phone} />
      <TextField source={Clients.balance} />
      <EditButton />
    </Datagrid>
  </List>
)

export const ClientsEdit = (props: any): JSX.Element => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source={Clients.name} />
      <TextInput source={Clients.email} />
      <TextInput source={Clients.phone} />
      <NumberInput source={Clients.balance} />
    </SimpleForm>
  </Edit>
)

export const ClientsCreate = (props: any): JSX.Element => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source={Clients.name} />
      <TextInput source={Clients.email} />
      <TextInput source={Clients.phone} />
      <NumberInput source={Clients.balance} />
    </SimpleForm>
  </Create>
)
