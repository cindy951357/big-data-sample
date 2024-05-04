import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import { MainLayout } from './layout/MainLayout';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <MainLayout />
      </div>
    </Provider>
  );
}

export default App;
