import React from 'react';
import './../css/TaskCard.css';



export default class AddTaskForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false
    }
  }

  onSubmit(event) {
    event.preventDefault();
    const taskText = this.textInput.value.trim();
    const id = this.textInput.id;
    const listNumber = this.props.formNum;
    console.log(this.props.onUpdate)
    if (taskText && this.props.onUpdate) {
      this.props.onUpdate(taskText, listNumber, id);
    }
    this.setTaskEditing(false)
  }

  setTaskEditing(cardEdit) {
    this.setState({
      cardEdit
    });
  }
  render(){
  if(!this.state.cardEdit)
  {
    return (
      <div className="task-card" draggable="true" id={[this.props.timeId]} onDragStart={this.props.onDragStart}
      onClick={() => this.setTaskEditing(true)}>
        {this.props.taskText}
      </div>
    )
  } 
  return (
    <form className="card edit-task" onSubmit={(e) => this.onSubmit(e)}>
    <input type="text" class="task-input" id={[this.props.timeId]}  ref={input => this.textInput = input} aria-label="Edit the task" />
    <div>
      <button className="button add-button">Save Task</button>
      <button className="button cancel-button" onClick={() => this.setTaskEditing(false)}>Cancel</button>
    </div>
  </form>
  )
}
}
