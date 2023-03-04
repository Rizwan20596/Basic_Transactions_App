import logo from './logo.svg';
import './App.css';
import Wallet from './screens/wallet';
import WalletTransactions from './screens/wallet-transactions'
import {
  Route,
  BrowserRouter as Router,
  Routes
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Wallet />
            }
          />
          <Route exact path='/wallet-transactions'
            element={<WalletTransactions />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
