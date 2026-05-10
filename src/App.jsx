import './App.css';

// The BlocksGrid component takes an array of blocks and renders them in a grid format, 
// with 3 blocks per row.
function BlocksGrid({ blocks }) {

    const rows = [];
    for (let i = 0; i < blocks.length; i += 3) {
        rows.push(blocks.slice(i, i + 3));
    }

    return (
        <div>
            {rows.map((blocksInRow, index) => (
                <BlocksRow key={index} blocksInRow={blocksInRow} />
            ))}
        </div>
    );

}

// The BlocksRow component takes an array of blocks and renders them in a single row.
function BlocksRow({ blocksInRow }) {

    return (
        <div>
            {blocksInRow.map((block) => (
                <Block 
                    key={block.id}
                    number={block.number}
                    color={block.color}
                />
            ))}
        </div>
    );

}

// The Block component takes:
//  a number and a color as props and renders a block with the specified color and number.
function Block({ number, color }) {

    // Event handler for when a block is clicked. 
    // It displays an alert with the block's number.
    const displayNumber = () => {
        alert(number);
    }

    return (
        <div className={`block ${color}`} onClick={displayNumber}>
            {number}
        </div>
    );    

}

// The App component is the main component of the application.
function App() {
    const blocks = [
        { number: 7, color: 'black', id: 7 },
        { number: 8, color: 'blue', id: 8 },
        { number: 9, color: 'red', id: 9 },
        { number: 4, color: 'yellow', id: 4 },
        { number: 5, color: 'black', id: 5 },
        { number: 6, color: 'blue', id: 6 },
        { number: 1, color: 'red', id: 1 },
        { number: 2, color: 'yellow', id: 2 },
        { number: 3, color: 'black', id: 3 }
    ];

    return (
        <div className="app">
            <h1>Wordle Game</h1>
            <BlocksGrid blocks={blocks} />
        </div>
    );
}

// Export the App component as the default export of this module, 
// allowing it to be imported and used in other parts of the application.
export default App;