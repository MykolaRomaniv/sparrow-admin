import {
  Create,
  Datagrid,
  Edit,
  EditButton,
  List,
  NumberInput,
  Show,
  ShowButton,
  SimpleForm,
  SimpleShowLayout,
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
      <ShowButton />
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

export const ClientsShow = (props: any): JSX.Element => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source={Clients.name} />
      <TextField source={Clients.email} />
      <TextField source={Clients.phone} />
      <TextField source={Clients.balance} />
    </SimpleShowLayout>
  </Show>
)
