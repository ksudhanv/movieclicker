import React, {useState, useEffect} from 'react'
import logo from '../logo.svg';
import '../App.css';

const Home = () => {

    // Total Money
    const [totalMoney, setTotalMoney] = useState(0);

    // Amount of interns
    const [totalInterns, setTotalInterns] = useState(0);

    // Price of interns
    const [internPrice, setInternPrice] = useState(10);


    // Upgades
    const [cookiesPerSecond, setCookiesPerSecond] = useState(0);

    /* Make sure to delete this part when store page is made */
    function buyInterns() {
        if(totalMoney >= internPrice)
        {
            setTotalInterns(totalInterns + 1);
            setCookiesPerSecond(cookiesPerSecond + 1);
            setTotalMoney(totalMoney - 10);
            setInternPrice(Math.round(internPrice * 1.2));
            // Math.round(intentPrice * 1.2)
        }
    }
    function cameraClick() {
        setTotalMoney(totalMoney + 1);
    }

    useEffect(() => {
        const id = setInterval(() => setTotalMoney((totalMoney) => totalMoney + cookiesPerSecond), 1000);
    
        return () => {
          clearInterval(id);
        };
      });


    


    return (
        <div className="App">
            <header className="App-header">
                <button onClick={cameraClick}>Get Money</button>
                <div>Your money = {totalMoney} </div>
                <div>cps = {cookiesPerSecond}</div>
                <div>amount of interns: {totalInterns}</div>
                <button onClick={buyInterns}>Buy an Intern: ${internPrice}</button>
            </header>
        </div>
    );

}

export default Home

{/*
let money = 0;
let interns = 0;
let costumeDesigners = 0;
let scriptwriters = 0;
let cameraOperators = 0;
let specialEffectsArtists
let productionAssistants = 0;

let producers = 0; //Like angels in AdCap
function getMoney()
{
    money += 1;
    document.getElementById("moneyCount").innerHTML = 'Money: ' + money;
}
setInterval (function() {
    money = money + interns;

})


//Implementing the setInterval method
const interval = setInterval(() => {
      setState(state + 1);
}, 1000);


useEffect(() => {
    const id = setInterval(() => setCount((oldCount) => oldCount + 1), 1000);

    return () => {
      clearInterval(id);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
*/}


{/*
setInterval(function(){
        
        setTotalMoney(totalMoney);
    }, 1000); 
*/}