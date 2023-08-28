import { Admin, Resource, ListGuesser, EditGuesser, ShowGuesser } from 'react-admin';
import { dataProvider } from './dataProvider';
import { UserList } from './stories/TestUserList';

import './App.css';

 const App = () => (
  <Admin
      dataProvider={dataProvider}
      darkTheme={{ palette: { mode: 'dark' } }}      
      >
        <Resource name="users" list={UserList} />
  </Admin>
);

export default App;
