/* eslint-disable import/no-extraneous-dependencies */
import "firebase/analytics"
import "firebase/database"

import CustomLayout from "common/CustomLayout"
import CustomRoutes from "components/CustomRoutes"
import { ProductsCreate, ProductsEdit, ProductsList } from "components/Products"
import { UsersCreate, UsersEdit, UsersList } from "components/Users"
import { Admin, Resource } from "react-admin"
import authProvider from "services/authProvider"
import customDataProvider from "services/dataProvider"

const App = (): JSX.Element => (
  <Admin
    dataProvider={customDataProvider}
    authProvider={authProvider}
    layout={CustomLayout}
    customRoutes={CustomRoutes}
  >
    <Resource
      name="users"
      options={{ label: "Користувачі" }}
      list={UsersList}
      edit={UsersEdit}
      create={UsersCreate}
    />
    <Resource
      name="products"
      options={{ label: "Продукти" }}
      list={ProductsList}
      edit={ProductsEdit}
      create={ProductsCreate}
    />
  </Admin>
)

export default App
