const Header = (props) => {
    return (
        <header>
            <h1>{ props.title }</h1>
        </header>
    );
}

const Day = (props) => {
    return (
        <div className="day">
            <span className="counter-score">{ props.score }</span>
            <span className="counter-score">{ props.score }</span>
            <span className="counter-score">{ props.score }</span>
            <span className="counter-score">{ props.score }</span>
        </div>
    );
}

const Day2 = (props) => {
    return (
        <div className="day">
            <span className="counter-score">{ props.score }</span>
        </div>
    );
}

const Totals = (props) => {
    return (
        <div className="day">
            <span className="counter-score">{ props.score }</span>
            <span className="counter-score">{ props.score }</span>
            <input type="number" />
        </div>
    );
}

const Button = (props) => {
    return (
        <div className="day">
            <span className="counter-score">{ props.score }</span>
        </div>
    );
}

// const Counter = (props) => {
//     return (
//         <div className="counter">
//             <span className="counter-score">{ props.score }</span>
//         </div>
//     );
// }

const App = () => {
    return (
        <div className="scoreboard">
            <Header title="Ordering App" totalPlayer={1} />

            {/* Players List */}
            <Day name="Day" score={"Day"} />
            <Totals name="Totals" score={"#"} />
            <Button name="Button" score={"Button"} />
        </div>
    );
}


ReactDOM.render(
    <App />,
    document.getElementById('root')
);

