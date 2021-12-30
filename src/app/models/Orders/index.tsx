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
  Show,
  ShowButton,
  SimpleForm,
  SimpleShowLayout,
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

const ordersFilters = [
  // TODO fulltext search https://marmelab.com/react-admin/List.html#full-text-search
  // <SearchInput key="q" source="q" alwaysOn />,
  <TextInput source={OrdersFields.id} key={OrdersFields.id} alwaysOn />,
  <DateInput key="date" label="Date" source={OrdersFields.date} />,
  <ReferenceInput
    key="clients"
    source={OrdersFields.clientsId}
    reference="clients"
  >
    <SelectInput optionText={Clients.name} />
  </ReferenceInput>,
  <ReferenceInput
    key="products"
    source={OrdersFields.productId}
    reference="products"
  >
    <SelectInput optionText={Products.name} />
  </ReferenceInput>,
  <RichTextInput source={OrdersFields.comment} key={OrdersFields.comment} />,
  <NumberInput source={OrdersFields.price} min={0} key={OrdersFields.price} />,
  <DateInput source={OrdersFields.date} key={OrdersFields.date} />,
  <BooleanInput source={OrdersFields.realized} key={OrdersFields.realized} />,
]

export const OrdersList = (props: any): JSX.Element => (
  <List {...props} filters={ordersFilters}>
    <Datagrid>
      <TextField source={OrdersFields.id} />
      <RichTextField source={OrdersFields.comment} />
      <NumberField source={OrdersFields.price} />
      <ReferenceField
        source={OrdersFields.clientsId}
        reference="clients"
        link="show"
      >
        <TextField source={Clients.name} />
      </ReferenceField>
      <ReferenceField
        source={OrdersFields.productId}
        reference="products"
        link="show"
      >
        <TextField source={Products.name} />
      </ReferenceField>
      <DateField source={OrdersFields.date} />
      <BooleanField source={OrdersFields.realized} />
      <EditButton />
      <ShowButton />
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
      <BooleanInput source={OrdersFields.realized} />
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
      <BooleanInput source={OrdersFields.realized} />
    </SimpleForm>
  </Create>
)

export const OrdersShow = (props: any): JSX.Element => (
  <Show {...props}>
    <SimpleShowLayout>
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
      <BooleanField source={OrdersFields.realized} />
    </SimpleShowLayout>
  </Show>
)
