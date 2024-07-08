import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { WaiterList } from "./waiter/WaiterList";
import { WaiterCreate } from "./waiter/WaiterCreate";
import { WaiterEdit } from "./waiter/WaiterEdit";
import { WaiterShow } from "./waiter/WaiterShow";
import { ManagerList } from "./manager/ManagerList";
import { ManagerCreate } from "./manager/ManagerCreate";
import { ManagerEdit } from "./manager/ManagerEdit";
import { ManagerShow } from "./manager/ManagerShow";
import { CashierList } from "./cashier/CashierList";
import { CashierCreate } from "./cashier/CashierCreate";
import { CashierEdit } from "./cashier/CashierEdit";
import { CashierShow } from "./cashier/CashierShow";
import { OwnerList } from "./owner/OwnerList";
import { OwnerCreate } from "./owner/OwnerCreate";
import { OwnerEdit } from "./owner/OwnerEdit";
import { OwnerShow } from "./owner/OwnerShow";
import { InventoryList } from "./inventory/InventoryList";
import { InventoryCreate } from "./inventory/InventoryCreate";
import { InventoryEdit } from "./inventory/InventoryEdit";
import { InventoryShow } from "./inventory/InventoryShow";
import { TablesList } from "./tables/TablesList";
import { TablesCreate } from "./tables/TablesCreate";
import { TablesEdit } from "./tables/TablesEdit";
import { TablesShow } from "./tables/TablesShow";
import { MenuList } from "./menu/MenuList";
import { MenuCreate } from "./menu/MenuCreate";
import { MenuEdit } from "./menu/MenuEdit";
import { MenuShow } from "./menu/MenuShow";
import { SalesList } from "./sales/SalesList";
import { SalesCreate } from "./sales/SalesCreate";
import { SalesEdit } from "./sales/SalesEdit";
import { SalesShow } from "./sales/SalesShow";
import { KitchenStaffList } from "./kitchenStaff/KitchenStaffList";
import { KitchenStaffCreate } from "./kitchenStaff/KitchenStaffCreate";
import { KitchenStaffEdit } from "./kitchenStaff/KitchenStaffEdit";
import { KitchenStaffShow } from "./kitchenStaff/KitchenStaffShow";
import { BillingList } from "./billing/BillingList";
import { BillingCreate } from "./billing/BillingCreate";
import { BillingEdit } from "./billing/BillingEdit";
import { BillingShow } from "./billing/BillingShow";
import { FoodMenuList } from "./foodMenu/FoodMenuList";
import { FoodMenuCreate } from "./foodMenu/FoodMenuCreate";
import { FoodMenuEdit } from "./foodMenu/FoodMenuEdit";
import { FoodMenuShow } from "./foodMenu/FoodMenuShow";
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
        title={"FB_POS_System"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Waiter"
          list={WaiterList}
          edit={WaiterEdit}
          create={WaiterCreate}
          show={WaiterShow}
        />
        <Resource
          name="Manager"
          list={ManagerList}
          edit={ManagerEdit}
          create={ManagerCreate}
          show={ManagerShow}
        />
        <Resource
          name="Cashier"
          list={CashierList}
          edit={CashierEdit}
          create={CashierCreate}
          show={CashierShow}
        />
        <Resource
          name="Owner"
          list={OwnerList}
          edit={OwnerEdit}
          create={OwnerCreate}
          show={OwnerShow}
        />
        <Resource
          name="Inventory"
          list={InventoryList}
          edit={InventoryEdit}
          create={InventoryCreate}
          show={InventoryShow}
        />
        <Resource
          name="Tables"
          list={TablesList}
          edit={TablesEdit}
          create={TablesCreate}
          show={TablesShow}
        />
        <Resource
          name="Menu"
          list={MenuList}
          edit={MenuEdit}
          create={MenuCreate}
          show={MenuShow}
        />
        <Resource
          name="Sales"
          list={SalesList}
          edit={SalesEdit}
          create={SalesCreate}
          show={SalesShow}
        />
        <Resource
          name="KitchenStaff"
          list={KitchenStaffList}
          edit={KitchenStaffEdit}
          create={KitchenStaffCreate}
          show={KitchenStaffShow}
        />
        <Resource
          name="Billing"
          list={BillingList}
          edit={BillingEdit}
          create={BillingCreate}
          show={BillingShow}
        />
        <Resource
          name="FoodMenu"
          list={FoodMenuList}
          edit={FoodMenuEdit}
          create={FoodMenuCreate}
          show={FoodMenuShow}
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
