import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Total = (props) => {
    return (
        <p>Number123123 of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
    )
}
const Header = (props) => {
    return (
        <h1>{props.course}</h1>
    )
}
const Content = (props) => {
    return (
        <div>
            <Part name={props.parts[0].name} exercises={props.parts[0].exercises}/>
            <Part name={props.parts[1].name} exercises={props.parts[1].exercises}/>
            <Part name={props.parts[2].name} exercises={props.parts[2].exercises}/>
        </div>
    )
}

const Part = (props) => {
    return (
        <p>
            {props.name} {props.exercises}
        </p>
    )
}

const Button = ({onClick, text}) => (
    <button onClick={onClick}>
        {text}
    </button>
)

const App = () => {

    const course = {
        name: 'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10
            },
            {
                name: 'Using props to pass data',
                exercises: 7
            },
            {
                name: 'State of a component',
                exercises: 14
            }
        ]
    }

    const handleClick = () => {

        console.log('pressing a button!!')
    }
    const [left, setLeft] = useState(0);
    const [right, setRight] = useState(0);
    const [allClicks, setAll] = useState([]);

    const handleLeftChage = (prev) => prev + 1;

    const handleLeftClick = () => {
        setLeft(handleLeftChage);
        setAll(allClicks.concat('L'));
    }

    const handleRightClick = () => {
        setRight(right+1);
        setAll(allClicks.concat('R'));
    }

    return (
        <div>
            <Header course={course.name}/>
            <Content parts={course.parts}/>
            <Total parts={course.parts}/>
            <Button onClick={handleLeftClick} text={left}/>
            <Button onClick={handleRightClick} text={right}/>
            <History allClicks={allClicks}/>
            <Button onClick={()=>handleClick()}
                    text='Some test button'/>
        </div>
    )
}
const History = ({allClicks}) => {
    if (allClicks.length > 0)
        return (
        <p>All clicks sizE: {allClicks.length}</p>
    )
    return (
        <p>Empty clicks!! woooa!</p>
    )
}
ReactDOM.render(<App/>, document.getElementById('root'))
