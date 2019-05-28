// const title = React.createElement(
//     'h1',
//     { id: 'main-title', title: 'This is a title.' },
//     'My First React Element!'
// );

// const title = <h1>My First React Elment!</h1>;  JSX


// const desc = React.createElement(
//     'p',
//     null,
//     'I just learned hot to create a React node and render it into the DOM.'
// );

// const desc = <p>I just learned hot to create a React node and render it into the DOM.</p>;   JSX

// const myTitleID = 'main-title'; JSX
// const name = 'Anthony'; JSX


// const header = React.createElement(
//     'header',
//     null,
//     title,
//     desc
// );

// const header = (
//     <header>
//         <h1>My First React Elment!</h1>
//         <p>I just learned hot to create a React node and render it into the DOM.</p>
//     </header>
// );

// const header = (
//     <header>
//         <h1 id={myTitleID}>{ name }'s First React Element!</h1>
//         <p>{ desc }</p>
//     </header>
// );


const players = [
    {
      name: "Anthony",
      score: 50
    },
    {
      name: "Steve",
      score: 75
    },
    {
      name: "Peter",
      score: 65
    },
    {
      name: "Thor",
      score: 80
    }
  ];
  
  const Header = (props) => {
    return (
      <header>
        <h1>{ props.title }</h1>
        <span className="stats">Players: { props.totalPlayers }</span>
      </header>
    );
  }
  
  const Player = (props) => {
    return (
      <div className="player">
        <span className="player-name">
          { props.name }
        </span>
  
        <Counter score={props.score} />
      </div>
    );
  }
  
  const Counter = (props) => {
    return (
      <div className="counter">
        <button className="counter-action decrement"> - </button>
        <span className="counter-score">{ props.score }</span>
        <button className="counter-action increment"> + </button>
      </div>
    );
  }
  
  const App = (props) => {
    return (
      <div className="scoreboard">
        <Header 
          title="Scoreboard" 
          totalPlayers={props.initialPlayers.length} 
        />
  
        {/* Players list */}
        {props.initialPlayers.map( player =>
          <Player 
            name={player.name}
            score={player.score}            
          />
        )}
      </div>
    );
  }
  
  ReactDOM.render(
    <App initialPlayers={players} />,
    document.getElementById('root')
  );

