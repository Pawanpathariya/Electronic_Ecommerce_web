import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import store from './redux/store.jsx';
import UserContext from './UserContext.jsx'
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
       < UserContext>
    <App />
    </UserContext>
  </Provider>
);


