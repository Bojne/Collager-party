import React from 'react';
import ReactDOM from 'react-dom';
import Draggable from 'react-draggable';
import dj from './dog.gif'
import './style.css';



const destination = document.getElementById('root');
console.log(dj)
class App extends React.Component {
  render() {
    return (
      <div>
        <Draggable
          handle=".handle"
          defaultPosition={{x: 0, y: 0}}
          position={null}
          // grid={[25, 25]}
          scale={1}
          onStart={this.handleStart}
          onDrag={this.handleDrag}
          onStop={this.handleStop}>
          <div>
              <img className="handle image" src={dj} alt="dj" />
          </div>
        </Draggable>
        <Draggable
          handle=".handle"
          defaultPosition={{x: 0, y: 0}}
          position={null}
          // grid={[25, 25]}
          scale={1}
          onStart={this.handleStart}
          onDrag={this.handleDrag}
          onStop={this.handleStop}>
          <div>
            <div className="handle">
              <div className='emoji'> 
                🗽 🍤 🍋
              </div>
            </div>
          </div>
        </Draggable>
        <Draggable
          handle=".handle"
          defaultPosition={{x: 0, y: 0}}
          position={null}
          // grid={[25, 25]}
          scale={1}
          onStart={this.handleStart}
          onDrag={this.handleDrag}
          onStop={this.handleStop}>
          <div className="handle">💐 💎 👾</div>
        </Draggable>
      </div>
      
    );
  }
}

ReactDOM.render(<App/>, destination);