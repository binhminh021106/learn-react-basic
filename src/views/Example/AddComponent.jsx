import React from "react";

export default class AddComponent extends React.Component {
    state = {
        title: "",
        salary: "",
    }
 
    handleChangeTitle = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    handleChangeSalary = (event) => {
        this.setState({
            salary: event.target.value
        })
    }

    handleSubmitButton = (event) => {
        event.preventDefault() // Giúp ngăn chặn hành động load lại trang khi bấm submit
        this.props.AddNewJob({
            id: Math.floor(Math.random() * 10000),
            title: this.state.title,
            salary: this.state.salary
        })
        
        this.setState({
            title: "",
            salary: ""
        })
    }
 
    render() {
        return (
            <>
                <form>
                    <label>Job's title</label>
                    <br/>
                    <input type="text" value={this.state.title} onChange={(event) => this.handleChangeTitle(event)} placeholder="Enter your Job's title"/>
                    <br/>
                    <label>Salary</label>
                    <br/>
                    <input type="text" value={this.state.salary} onChange={(event) => this.handleChangeSalary(event)} placeholder="Enter your salary"/>
                    <br/>
                    <button onClick={(event) => this.handleSubmitButton(event)}>Submit</button>
                </form> 
            </>
        );
    }
}