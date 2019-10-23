import React, { Component } from 'react';

export class AddTodo extends Component {
    state = {
        title: ''
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addItem(this.state.title);
        this.setState({ title: '' });
    }

    changeContent = (e) => this.setState({ title: e.target.value });

    render() {
        return (
            <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
                <input type="text" name="title" placeholder="Add" value={this.state.title}
                    onChange={this.changeContent}

                    style={{ flex: 1, padding: '5px', textAlign: 'center' }}
                />
                <input type="submit" value="Submit" className="btn"
                    style={{ flex: 1 }}

                />
            </form>
        )
    }
}



export default AddTodo;