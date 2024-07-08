import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { OrderList } from "./order/OrderList";
import { OrderCreate } from "./order/OrderCreate";
import { OrderEdit } from "./order/OrderEdit";
import { OrderShow } from "./order/OrderShow";
import { TableList } from "./table/TableList";
import { TableCreate } from "./table/TableCreate";
import { TableEdit } from "./table/TableEdit";
import { TableShow } from "./table/TableShow";
import { BillingList } from "./billing/BillingList";
import { BillingCreate } from "./billing/BillingCreate";
import { BillingEdit } from "./billing/BillingEdit";
import { BillingShow } from "./billing/BillingShow";
import { FoodMenuList } from "./foodMenu/FoodMenuList";
import { FoodMenuCreate } from "./foodMenu/FoodMenuCreate";
import { FoodMenuEdit } from "./foodMenu/FoodMenuEdit";
import { FoodMenuShow } from "./foodMenu/FoodMenuShow";
import { MenuList } from "./menu/MenuList";
import { MenuCreate } from "./menu/MenuCreate";
import { MenuEdit } from "./menu/MenuEdit";
import { MenuShow } from "./menu/MenuShow";
import { InventoryList } from "./inventory/InventoryList";
import { InventoryCreate } from "./inventory/InventoryCreate";
import { InventoryEdit } from "./inventory/InventoryEdit";
import { InventoryShow } from "./inventory/InventoryShow";
import { SalesList } from "./sales/SalesList";
import { SalesCreate } from "./sales/SalesCreate";
import { SalesEdit } from "./sales/SalesEdit";
import { SalesShow } from "./sales/SalesShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { ManagerList } from "./manager/ManagerList";
import { ManagerCreate } from "./manager/ManagerCreate";
import { ManagerEdit } from "./manager/ManagerEdit";
import { ManagerShow } from "./manager/ManagerShow";
import { OwnerList } from "./owner/OwnerList";
import { OwnerCreate } from "./owner/OwnerCreate";
import { OwnerEdit } from "./owner/OwnerEdit";
import { OwnerShow } from "./owner/OwnerShow";
import { CashierList } from "./cashier/CashierList";
import { CashierCreate } from "./cashier/CashierCreate";
import { CashierEdit } from "./cashier/CashierEdit";
import { CashierShow } from "./cashier/CashierShow";
import { KitchenStaffList } from "./kitchenStaff/KitchenStaffList";
import { KitchenStaffCreate } from "./kitchenStaff/KitchenStaffCreate";
import { KitchenStaffEdit } from "./kitchenStaff/KitchenStaffEdit";
import { KitchenStaffShow } from "./kitchenStaff/KitchenStaffShow";
import { WaiterList } from "./waiter/WaiterList";
import { WaiterCreate } from "./waiter/WaiterCreate";
import { WaiterEdit } from "./waiter/WaiterEdit";
import { WaiterShow } from "./waiter/WaiterShow";
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
        title={"F&B POS Service"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Order"
          list={OrderList}
          edit={OrderEdit}
          create={OrderCreate}
          show={OrderShow}
        />
        <Resource
          name="Table"
          list={TableList}
          edit={TableEdit}
          create={TableCreate}
          show={TableShow}
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
          name="Menu"
          list={MenuList}
          edit={MenuEdit}
          create={MenuCreate}
          show={MenuShow}
        />
        <Resource
          name="Inventory"
          list={InventoryList}
          edit={InventoryEdit}
          create={InventoryCreate}
          show={InventoryShow}
        />
        <Resource
          name="Sales"
          list={SalesList}
          edit={SalesEdit}
          create={SalesCreate}
          show={SalesShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Manager"
          list={ManagerList}
          edit={ManagerEdit}
          create={ManagerCreate}
          show={ManagerShow}
        />
        <Resource
          name="Owner"
          list={OwnerList}
          edit={OwnerEdit}
          create={OwnerCreate}
          show={OwnerShow}
        />
        <Resource
          name="Cashier"
          list={CashierList}
          edit={CashierEdit}
          create={CashierCreate}
          show={CashierShow}
        />
        <Resource
          name="KitchenStaff"
          list={KitchenStaffList}
          edit={KitchenStaffEdit}
          create={KitchenStaffCreate}
          show={KitchenStaffShow}
        />
        <Resource
          name="Waiter"
          list={WaiterList}
          edit={WaiterEdit}
          create={WaiterCreate}
          show={WaiterShow}
        />
      </Admin>
    </div>
  );
};

export default App;
