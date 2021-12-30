import RichTextInput from "ra-input-rich-text"
import {
  BooleanField,
  BooleanInput,
  Create,
  Datagrid,
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
  comment = "comment",
  price = "price",
  realized = "realized",
}

export const OrdersList = (props: any): JSX.Element => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <RichTextField source={OrdersFields.comment} />
      <NumberField source={OrdersFields.price} />
      <ReferenceField source="clients_id" reference="clients">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="product_id" reference="products">
        <TextField source="name" />
      </ReferenceField>
      <BooleanField source={OrdersFields.realized} label="Реалізовано" />
      <EditButton />
    </Datagrid>
  </List>
)

export const OrdersEdit = (props: any): JSX.Element => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <RichTextInput source={OrdersFields.comment} />
      <NumberInput source={OrdersFields.price} min={0} />
      <ReferenceInput source="clients_id" reference="clients">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <ReferenceInput source="product_id" reference="products">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <BooleanInput source={OrdersFields.realized} label="Реалізовано" />
    </SimpleForm>
  </Edit>
)

export const OrdersCreate = (props: any): JSX.Element => (
  <Create {...props}>
    <SimpleForm>
      <RichTextField source={OrdersFields.comment} />
      <NumberInput source={OrdersFields.price} min={0} />
      <ReferenceInput source="clients_id" reference="clients">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <ReferenceInput source="product_id" reference="products">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <BooleanInput source={OrdersFields.realized} label="Реалізовано" />
    </SimpleForm>
  </Create>
)
