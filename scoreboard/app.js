// const title = React.createElement(
//     'h1',
//     { id: 'main-title', title: 'This is a title.' },
//     'My First React Element!'
// );

const title = <h1>My First React Elment!</h1>;


// const desc = React.createElement(
//     'p',
//     null,
//     'I just learned hot to create a React node and render it into the DOM.'
// );

const desc = <p>I just learned hot to create a React node and render it into the DOM.</p>;

const myTitleID = 'main-title';
const name = 'Anthony'


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

const header = (
    <header>
        <h1 id={myTitleID}>{ name }'s First React Element!</h1>
        <p>{ desc }</p>
    </header>
);

ReactDOM.render(
    header,
    document.getElementById('root')
);

