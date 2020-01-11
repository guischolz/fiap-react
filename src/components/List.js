import React from 'react';
import TaskCard from './TaskCard';
import AddTaskForm from './TaskForm';
import './../css/List.css';
import CursorPointer from './CursorPointer';


export default class List extends React.Component {
  constructor(props) {
    super(props);
    }
   
  render() {
    const cards = this.props.cards.map((card, index) => {
      return ( 
        <li key={index}>
          <CursorPointer onClick={this.props.onCardRemove}>x</CursorPointer>
      
          <TaskCard {...card} onDragStart={this.props.onDragStart} onUpdate={ this.props.onUpdate} />
        </li>
      );
    })
      
    if(this.props.title === 'To Do')
    {
    return (
      <div>
        <h2 className={`name-header name-${this.props.id}`}>{this.props.title}</h2>
        <ul className="list" onDragOver={this.props.onDragOver} onDrop={this.props.onDrop}>
          {cards}
          <li className="add-list-wrapper">
            <AddTaskForm formNum={this.props.id} onAdd={this.props.onAdd} />
          </li>
        </ul>
      </div>
    );
}
return (
    <div>
      <h2 className={`name-header name-${this.props.id}`}>{this.props.title}</h2>
      <ul className="list" onDragOver={this.props.onDragOver} onDrop={this.props.onDrop}>
        {cards}
      </ul>
    </div>
  );
  }
  
}