import RichTextInput from "ra-input-rich-text"
import {
  BooleanField,
  BooleanInput,
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

export const ProductsList = (props: any): JSX.Element => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
      <RichTextField source="desc" />
      <NumberField source="price" />
      <NumberField source="weight" />
      <BooleanField label="Реалізовано" source="realized" />
      <ImageField source="pictures.0.src" title="title" label="Pictures" />
      <EditButton />
    </Datagrid>
  </List>
)

export const ProductsEdit = (props: any): JSX.Element => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="name" />
      <RichTextInput source="desc" />
      <NumberInput source="price" min={0} />
      <NumberInput source="weight" min={0} />
      <BooleanInput label="Реалізовано" source="realized" />
      <ImageInput
        source="pictures"
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
      <TextInput source="id" />
      <TextInput source="name" />
      <RichTextField source="desc" />
      <NumberInput source="price" min={0} />
      <NumberInput source="weight" min={0} />
      <BooleanInput label="Реалізовано" source="realized" />
      <ImageInput
        source="pictures"
        label="Related pictures"
        accept="image/*"
        multiple
      >
        <ImageField source="src" title="title" />
      </ImageInput>
    </SimpleForm>
  </Create>
)
