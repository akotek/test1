import React, {useState} from 'react'
import ReactDOM from 'react-dom'


const Header = ({header}) => {
    return (
        <h1>{header}</h1>
    )
};

const Button = ({name, onClick}) => {
    return (
        <button onClick={onClick}>{name}</button>
    )
};

const TableEntry = ({text, data}) => {
    return (
        <tr>
            <td>{text}</td>
            <td>{data}</td>
        </tr>
    )
};

const Statistics = ({totalData}) => {

    let sum = totalData.reduce((a, b) => a + b, 0);
    const [g, n, b] = totalData;
    if (sum > 0) {
        return (
            <table>
                <tbody>
                <TableEntry text="good" data={g}/>
                <TableEntry text="neutral" data={n}/>
                <TableEntry text="bad" data={b}/>
                <TableEntry text="all" data={sum}/>
                <TableEntry text="avg" data={(g*1 + b*-1) / sum}/>
                <TableEntry text="positive" data={((g / sum) * 100) + ' %'}/>
                </tbody>
            </table>
        )
    }
    return (
        (<p>"No feedback given"</p>)
    );
};

const Anecdote = ({text})=>{
    if (text === ""){
        return <p>"No anecdote yet!</p>
    }
    return (
        <p>{text}</p>
    )
};

const App = () => {

    const anecdotes = [
        'If it hurts, do it more often',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
    ];
    const header = "give feedback";
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);
    const [anecdote, setAnecdote] = useState("");

    const genAnecdote = () =>{
        setAnecdote(anecdotes[Math.floor(Math.random() * anecdotes.length)]);
    };

    return (
        <div>
            <Header header={header}/>
            <Button name="good" onClick={()=>{setGood(good+1)}}/>
            <Button name="neutral" onClick={()=>{setNeutral(neutral+1)}}/>
            <Button name="bad" onClick={()=>{setBad(bad+1)}}/>
            <Statistics totalData={[good, neutral, bad]}/>
            <Anecdote text={anecdote}/>
            <Button name="get next anecdote" onClick={genAnecdote}/>
        </div>
    )
};

ReactDOM.render(<App/>,
    document.getElementById('root')
);
