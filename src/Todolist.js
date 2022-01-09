import { Component } from 'react';
import checkmark from './checkmark.png';

export class TodoList extends Component {
    state = {
        userInput:"",
        todoList:[]
    }

    onChangeEvent (e){
        this.setState ({userInput: e})
    }

    addItem(input) {
        if (input === ''){
            alert ('Пожалуйста, напиши задачу на сегодня')
        } else {
        let myList = this.state.todoList;
        myList.push(input)
        this.setState({todoList: myList, userInput: ""})
        console.log ("mylist");
    }
}

    crossedWord(event){
        const li=event.target;
        li.classList.toggle('crossed');
    }

    deliteItem(input){
        let myList=this.state.todoList;
        myList = [];
        this.setState ({todoList: myList})
    }

    onFormSubmit(e){
        e.preventDefault();
    }

    render (){
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
            <div className="container">
                <input className="inputik" type="text"
                placeholder="Что у нас на сегодня?"
                onChange={(e)=>{this.onChangeEvent(e.target.value)}}
                value={this.state.userInput}/>
            </div>
            <div className="container">
                <button className="btn add" onClick={()=>this.addItem(this.state.userInput)}>Добавить</button>
            </div>
            <ul>
                {this.state.todoList.map((item, index)=> (
                    <li onClick={this.crossedWord} key={index}>
                        <img src={checkmark} width="30px" alt="check"/>
                        {item}</li>
                ))}
            </ul>
            <div className="container">
                <button className="btn delete" onClick={()=>this.deliteItem()}>Очистить список</button>
            </div>
            </form>
            </div>
        )
    }
}