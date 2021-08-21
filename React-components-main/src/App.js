import './App.css';
import Picture from './components/profile/ProfilePhoto';
import MyName from './components/profile/FullName';
import Adresse from './components/profile/Address';

function App() {
  return (
    <div className="App">
      <MyName/>
      <Picture/>
      <Adresse/>
    </div>
  );
}

export default App;
