import React from 'react';
import { Admin, Resource } from 'react-admin';
import {RESTBackendProvider} from "./providers/dataProvider";
import {RESTBackendAuthProvider} from "./providers/authProvider";
import {CategoryList} from "./components/category/categoryList";
import {ItemList} from "./components/item/itemList";
import {ItemShow} from "./components/item/itemShow";
import {ItemEdit} from "./components/item/itemEdit";
import {CategoryEdit} from "./components/category/categoryEdit";
import {CategoryShow} from "./components/category/categoryShow";
import {Dashboard} from "./components/dashboard/index";
import {CategoryCreate} from "./components/category/categoryCreate";
import {ItemCreate} from "./components/item/itemCreate";
import Bookmarks from '@material-ui/icons/Bookmarks';

function App() {
  return (
    <Admin
      dataProvider={RESTBackendProvider}
      authProvider={RESTBackendAuthProvider}
      dashboard={Dashboard}
    >
      <Resource name="categories" list={CategoryList} edit={CategoryEdit} show={CategoryShow} create={CategoryCreate} icon={Bookmarks}/>
      <Resource name="items" list={ItemList} edit={ItemEdit} show={ItemShow} create={ItemCreate}/>
    </Admin>
  );
}

export default App;
