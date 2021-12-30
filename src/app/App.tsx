/* eslint-disable import/no-extraneous-dependencies */
import "firebase/analytics"
import "firebase/database"

import CustomLayout from "common/CustomLayout"
import CustomRoutes from "components/CustomRoutes"
import { ClientsCreate, ClientsEdit, ClientsList } from "models/Clients"
import { OrdersCreate, OrdersEdit, OrdersList } from "models/Orders"
import { ProductsCreate, ProductsEdit, ProductsList } from "models/Products"
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
      name="clients"
      options={{ label: "Клієнти" }}
      list={ClientsList}
      edit={ClientsEdit}
      create={ClientsCreate}
    />
    <Resource
      name="products"
      options={{ label: "Товари" }}
      list={ProductsList}
      edit={ProductsEdit}
      create={ProductsCreate}
    />
    <Resource
      name="orders"
      options={{ label: "Замовлення" }}
      list={OrdersList}
      edit={OrdersEdit}
      create={OrdersCreate}
    />
  </Admin>
)

export default App
