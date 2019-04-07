
import React, { Component } from 'react';
// import logo from './logo.svg';
import dark from './dark.svg'
// import day from './night.svg'
import halfHeart from './half-heart.png'
import fullHeart from './full-heart.png'
import emptyHeart from './empty-heart.png'
import flower from './flower.png'
import clock from './clock.png'
import island from './island.png'
import rock from './rock.jpg'
import rock2 from './skull2.gif'
import monster from './green-eye.gif'
import monster2 from './monster.gif'
import './App.css';
import Speed from './components/speed/speed';
import Timer from './components/timer/Timer'
import Music from './music.mp3'
class App extends Component {
state = {
    data: null
  };
  
  componentDidMount() {
    document.getElementById('music').play()
      // Call our fetch function below once the component mounts
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
  }
    // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch('/express_backend');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  };

  render() {
    console.log(this.state.data)
    return (
      <div className="App">
      {/* <audio autoplay><source src="music.mp3" type="audio/mpeg" /></audio> */}
        <audio src="music.mp3" className="audio" id="audio"></audio>
        
        {/* <img src={dark} className="bg-image" alt="bg" /> */}
        <Speed props={this.state.data}/>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
       < div className = "bg" >
       <div className='healthbar'>
        <img src={fullHeart} className="full-heart1" alt="full-heart1" />
        <img src={fullHeart} className="full-heart2" alt="full-heart2" />
        <img src={fullHeart} className="full-heart3" alt="full-heart3" />
        <img src={fullHeart} className="full-heart4" alt="full-heart4" />
        <img src={fullHeart} className="full-heart5" alt="full-heart5" />
        <img src={fullHeart} className="full-heart6" alt="full-heart6" />
       
       </div>
        <img src={monster} className="monster" alt="monster" />
        <img src={rock} className="rock" alt="rock" />
        <img src={island} className="island" alt="island" />
        <div className="ending">
        <div className="Over">Game Over!</div>
        <div className="Won">You Won!</div>
        </div>
        {/* <img src={island} className="island5" alt="island5" /> */}
        <img src={island} className="island2" alt="island2" />
        <img src={island} className="island3" alt="island3" />
        <img src={island} className="island4" alt="island4" />
        <img src={clock} className="clock" alt="clock" />
        <div className="right">
        <img src={monster2} className="monster2" alt="monster2" />
        <img src={rock2} className="rock2" alt="rock2" />
        <img src={flower} className="flower" alt="flower" />
        </div>
        <audio src=".music.mp3" controls> <embed src=".music.mp3" width="300" height="90" loop="true" autostart="true" /></audio>
         <audio id="music">
          <source loop src=".music.mp3" type="audio/mp3" />
        </audio>
        < div className = "timer-box" >
        <Timer />
        </div>
      
        </div>
        

      </div>
    );
  }
}

export default App;