import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { RoleList } from "./role/RoleList";
import { RoleCreate } from "./role/RoleCreate";
import { RoleEdit } from "./role/RoleEdit";
import { RoleShow } from "./role/RoleShow";
import { TableList } from "./table/TableList";
import { TableCreate } from "./table/TableCreate";
import { TableEdit } from "./table/TableEdit";
import { TableShow } from "./table/TableShow";
import { FoodMenuList } from "./foodMenu/FoodMenuList";
import { FoodMenuCreate } from "./foodMenu/FoodMenuCreate";
import { FoodMenuEdit } from "./foodMenu/FoodMenuEdit";
import { FoodMenuShow } from "./foodMenu/FoodMenuShow";
import { SalesList } from "./sales/SalesList";
import { SalesCreate } from "./sales/SalesCreate";
import { SalesEdit } from "./sales/SalesEdit";
import { SalesShow } from "./sales/SalesShow";
import { MenuList } from "./menu/MenuList";
import { MenuCreate } from "./menu/MenuCreate";
import { MenuEdit } from "./menu/MenuEdit";
import { MenuShow } from "./menu/MenuShow";
import { BillingList } from "./billing/BillingList";
import { BillingCreate } from "./billing/BillingCreate";
import { BillingEdit } from "./billing/BillingEdit";
import { BillingShow } from "./billing/BillingShow";
import { InventoryList } from "./inventory/InventoryList";
import { InventoryCreate } from "./inventory/InventoryCreate";
import { InventoryEdit } from "./inventory/InventoryEdit";
import { InventoryShow } from "./inventory/InventoryShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"F&B POS System"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Role"
          list={RoleList}
          edit={RoleEdit}
          create={RoleCreate}
          show={RoleShow}
        />
        <Resource
          name="Table"
          list={TableList}
          edit={TableEdit}
          create={TableCreate}
          show={TableShow}
        />
        <Resource
          name="FoodMenu"
          list={FoodMenuList}
          edit={FoodMenuEdit}
          create={FoodMenuCreate}
          show={FoodMenuShow}
        />
        <Resource
          name="Sales"
          list={SalesList}
          edit={SalesEdit}
          create={SalesCreate}
          show={SalesShow}
        />
        <Resource
          name="Menu"
          list={MenuList}
          edit={MenuEdit}
          create={MenuCreate}
          show={MenuShow}
        />
        <Resource
          name="Billing"
          list={BillingList}
          edit={BillingEdit}
          create={BillingCreate}
          show={BillingShow}
        />
        <Resource
          name="Inventory"
          list={InventoryList}
          edit={InventoryEdit}
          create={InventoryCreate}
          show={InventoryShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
