// import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header';
import TextForm from './MyComponents/TextForm';


function App() {
  return (
    <>
    <Header name="BlackShip" about="about" title="TextUtils" aboutText="AboutTextUtils" searchBar={false} />  {/*by giving searchBar=true/false you can show or hide search bar*/}
    <TextForm />
    </>
    
  );
}

export default App;
