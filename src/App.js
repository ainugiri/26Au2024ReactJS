import logo from './logo.svg';
import './App.css';
import UserProfile from './Components/UserProfile';
import Products from './Components/Products';
import EmployeeDetails from './Components/EmployeeDetails'; 
import Kart from './Components/Kart';
import CountersX from './Components/CountersX'; 
import Likes from './Components/Likes';
import CountersY from './Components/CountersY';
import SimpleForm from './Components/SimpleForm';
import TaskPlanner from './Components/TaskPlanner';
import Remainders from './Components/Remainders';
import Expenses from './Components/Expenses';
function App() {
  const userProfile = 
      [{name: 'Giri', age: 25, city: 'New York', occupation: 'Developer'},
      {name: 'Jane', age: 22, city: 'San Francisco', occupation: 'Designer'},
      {name: 'Doe', age: 30, city: 'Los Angeles', occupation: 'Manager'}];
  return (
    <div>
      <header className="App-header">
       <h1>React Application</h1>
      </header>
      <section className="Section-header">
        <h2>React</h2>
      </section>

      <br />
      <Remainders />
      <br />
      <Expenses />
      <br />
      <hr />      

      <CountersY likes={102} />
      <hr />
      <Likes /> 
      <CountersX val={20} />
      
      {userProfile.map((user, index) => (
        <UserProfile key={index} name={user.name} age={user.age} city={user.city} occupation={user.occupation} />
      ))}

      <EmployeeDetails eno="101" ename="Giri Prasad"/>
      <EmployeeDetails eno="102" ename="Jane Doe"/>
      <EmployeeDetails eno="103" ename="John Doe"/>
      <EmployeeDetails ename="Raj" />

      <Kart pname="iPhone" price="12000" qty ="10" date = "2021-10-10"/>
      <Kart pname="Samsung" price="10000" qty ="5" date = "2021-10-10"/>
      <Kart pname="OnePlus" price="8000" qty ="3" date = "2021-10-10"/> 
      
      <Products />

      
    </div>
  );
}

export default App;
