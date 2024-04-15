import "./App.css";
import pic from './assets/strength.webp';
import {DATA} from './data'
import TabButton from "./button";


const reactDes=["APPLE","LITCHI","ORANGE"]
function getRandomInt(m){
  return Math.floor(Math.random()*(m+1))
}
function App() {
  const eventHandler=()=>{
    console.log("Helloooo...................")
  }
  function handleSelect(){
    console.log("Selected")
  }
  return (
    <>
      <div>
        <img id="img" src={pic} />
        <h1>Welcome to Vinkweb Infotek!!!!!</h1>
        <ul>
          <li><a href="default.asp">Home</a></li>
          <li><a href="news.asp">News</a></li>
          <li><a href="contact.asp">Contact</a></li>
          <li><a href="about.asp">About</a></li>
        </ul>

        
        <h3>{reactDes[getRandomInt(2)]}</h3>
        <Header/>
        <Concepts name="Murugeswari"/>
        <Concepts {...DATA[0]}/>
        <Concepts {...DATA[1]}/>


        <button type="button" onClick={()=>eventHandler()}>GET STARTED</button>

        <menu>
          <TabButton onSelect={handleSelect}>component 1</TabButton>
          <TabButton onSelect={handleSelect}>component 2</TabButton>
          <TabButton onSelect={handleSelect}>component 3</TabButton>



        </menu>
      </div>
    </>
  );
}

function Header(){
  return(
    <>
      <h3>Good Morning!!!!</h3>
    </>
  )
}
export default App;
 function Concepts(props){
  return(
    <>
      <p>{props.name}</p>
      <p>{props.place}</p>

    </>
  )
 }
