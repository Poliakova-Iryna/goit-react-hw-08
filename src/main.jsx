import { createRoot } from 'react-dom/client';
import './index.css';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
      <Toaster
        position='top-right'
        reverseOrder={false}
        toastOptions={{
          duration: 2000,
        }}
      />
    </BrowserRouter>
  </Provider>
);