import { Clients } from "models/Clients"
import { Products } from "models/Products"
import RichTextInput from "ra-input-rich-text"
import {
  BooleanField,
  BooleanInput,
  Create,
  Datagrid,
  DateField,
  DateInput,
  Edit,
  EditButton,
  List,
  NumberField,
  NumberInput,
  ReferenceField,
  ReferenceInput,
  RichTextField,
  SelectInput,
  SimpleForm,
  TextField,
  TextInput,
} from "react-admin"

export enum OrdersFields {
  id = "id",
  comment = "comment",
  price = "price",
  realized = "realized",
  clientsId = "clientsId",
  productId = "productId",
  date = "date",
}

export const OrdersList = (props: any): JSX.Element => (
  <List {...props}>
    <Datagrid>
      <TextField source={OrdersFields.id} />
      <RichTextField source={OrdersFields.comment} />
      <NumberField source={OrdersFields.price} />
      <ReferenceField source={OrdersFields.clientsId} reference="clients">
        <TextField source={Clients.name} />
      </ReferenceField>
      <ReferenceField source={OrdersFields.productId} reference="products">
        <TextField source={Products.name} />
      </ReferenceField>
      <DateField source={OrdersFields.date} />
      <BooleanField source={OrdersFields.realized} label="Реалізовано" />
      <EditButton />
    </Datagrid>
  </List>
)

export const OrdersEdit = (props: any): JSX.Element => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source={OrdersFields.id} />
      <RichTextInput source={OrdersFields.comment} />
      <NumberInput source={OrdersFields.price} min={0} />
      <ReferenceInput source={OrdersFields.clientsId} reference="clients">
        <SelectInput optionText={Clients.name} />
      </ReferenceInput>
      <ReferenceInput source={OrdersFields.productId} reference="products">
        <SelectInput optionText={Products.name} />
      </ReferenceInput>
      <DateInput source={OrdersFields.date} />
      <BooleanInput source={OrdersFields.realized} label="Реалізовано" />
    </SimpleForm>
  </Edit>
)

export const OrdersCreate = (props: any): JSX.Element => (
  <Create {...props}>
    <SimpleForm>
      <RichTextField source={OrdersFields.comment} />
      <NumberInput source={OrdersFields.price} min={0} />
      <ReferenceInput source={OrdersFields.clientsId} reference="clients">
        <SelectInput optionText={Clients.name} />
      </ReferenceInput>
      <ReferenceInput source={OrdersFields.productId} reference="products">
        <SelectInput optionText={Products.name} />
      </ReferenceInput>
      <DateInput source={OrdersFields.date} />
      <BooleanInput source={OrdersFields.realized} label="Реалізовано" />
    </SimpleForm>
  </Create>
)
