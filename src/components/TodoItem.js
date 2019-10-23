import React, { Component } from 'react';
import PropTypes from 'prop-types';


export class TodoItem extends Component {
    getStyle = () => {
        return {
            background: this.props.todo.completed ? 'MistyRose' : 'AliceBlue',
            textAlign: 'center',
            padding: '10px',
            borderBottom: '1px #ccc solid',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none',
            transition: '.4s all ease'
        }
    }



    render() {
        const { id, title } = this.props.todo;

        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> {' '}
                    {title}
                    &nbsp;
                    <button onClick={this.props.deleteItem.bind(this, id)} style={btnStyle}>X</button>
                </p>
            </div>
        )
    }
}

// PropTypes //
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

const btnStyle = {
    background: 'rgb(191, 68,61)',
    color: '#fff',
    padding: '5px 7px',
    borderRadius: '100%',
    cursor: 'pointer'
}

export default TodoItem