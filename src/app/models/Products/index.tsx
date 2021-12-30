import RichTextInput from "ra-input-rich-text"
import {
  Create,
  Datagrid,
  Edit,
  EditButton,
  ImageField,
  ImageInput,
  List,
  NumberField,
  NumberInput,
  RichTextField,
  SimpleForm,
  TextField,
  TextInput,
} from "react-admin"

export enum Products {
  id = "id",
  name = "name",
  desc = "desc",
  price = "price",
  weight = "weight",
  pictures = "pictures",
}

export const ProductsList = (props: any): JSX.Element => (
  <List {...props}>
    <Datagrid>
      <TextField source={Products.id} />
      <TextField source={Products.name} />
      <RichTextField source={Products.desc} />
      <NumberField source={Products.price} />
      <NumberField source={Products.weight} />
      <ImageField
        source={`${Products.pictures}.0.src`}
        title="title"
        label="Pictures"
      />
      <EditButton />
    </Datagrid>
  </List>
)

export const ProductsEdit = (props: any): JSX.Element => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source={Products.id} />
      <TextInput source={Products.name} />
      <RichTextInput source={Products.desc} />
      <NumberInput source={Products.price} min={0} />
      <NumberInput source={Products.weight} min={0} />
      <ImageInput
        source={Products.pictures}
        label="Related pictures"
        accept="image/*"
        multiple
      >
        <ImageField source="src" title="title" />
      </ImageInput>
    </SimpleForm>
  </Edit>
)

export const ProductsCreate = (props: any): JSX.Element => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source={Products.id} />
      <TextInput source={Products.name} />
      <RichTextField source={Products.desc} />
      <NumberInput source={Products.price} min={0} />
      <NumberInput source={Products.weight} min={0} />
      <ImageInput
        source={Products.pictures}
        label="Related pictures"
        accept="image/*"
        multiple
      >
        <ImageField source="src" title="title" />
      </ImageInput>
    </SimpleForm>
  </Create>
)
