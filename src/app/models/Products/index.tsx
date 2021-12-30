import { IMAGE_KEY } from "constants/index"
import RichTextInput from "ra-input-rich-text"
import {
  ArrayField,
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
  Show,
  ShowButton,
  SimpleForm,
  SimpleShowLayout,
  SingleFieldList,
  TextField,
  TextInput,
} from "react-admin"

export const Products = {
  id: "id",
  name: "name",
  desc: "desc",
  price: "price",
  weight: "weight",
  // TODO better schema for pictures
  pictures: IMAGE_KEY,
}

export const productsFilters = [
  <TextInput key={Products.id} source={Products.id} alwaysOn />,
  <TextInput key={Products.name} source={Products.name} />,
  <RichTextInput key={Products.desc} source={Products.desc} />,
  <NumberInput key={Products.price} source={Products.price} min={0} />,
  <NumberInput key={Products.weight} source={Products.weight} min={0} />,
  <ImageInput
    key={Products.pictures}
    source={Products.pictures}
    label="Related pictures"
    accept="image/*"
    multiple
  >
    <ImageField source="src" title="title" />
  </ImageInput>,
]

export const ProductsList = (props: any): JSX.Element => (
  <List {...props} filters={productsFilters}>
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
      <ShowButton />
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

export const ProductsShow = (props: any): JSX.Element => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source={Products.id} />
      <TextField source={Products.name} />
      <RichTextField source={Products.desc} />
      <NumberField source={Products.price} />
      <NumberField source={Products.weight} />
      <ArrayField source={Products.pictures} fieldKey="id">
        <SingleFieldList>
          <ImageField source="src" title="title" label="Pictures" />
        </SingleFieldList>
      </ArrayField>
    </SimpleShowLayout>
  </Show>
)
