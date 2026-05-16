import React from "react";

export default class AddComponent extends React.Component {

    state = {
        name: "",
        dateOfBirth: "",
        address: ""
    }

    handleChangeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleChangeDate = (event) => {
        this.setState({
            dateOfBirth: event.target.value
        })
    }

    handleChangeAddress = (event) => {
        this.setState({
            address: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.AddNewPerson({
            id: Math.floor(Math.random() * 1000),
            name: this.state.name,
            dateOfBirth: this.state.dateOfBirth,
            address: this.state.address
        })

        this.setState({
            name: "",
            dateOfBirth: "",
            address: ""
        })
    }

    render() {
        return (
            <>
                <form>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" className="form-control" onChange={(event) => this.handleChangeName(event)} placeholder="Enter name"/>
                    </div>
                    <div className="form-group">
                        <label>Date of birth</label>
                        <input type="date" className="form-control" onChange={(event) => this.handleChangeDate(event)} placeholder="Enter date of birth"/>
                    </div>
                    <div className="form-group">
                        <label>Address</label>
                        <input type="text" className="form-control" onChange={(event => this.handleChangeAddress(event))} placeholder="Enter address"/>
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary" onClick={(event) => this.handleSubmit(event)}>Submit</button>
                    </div>
                </form>
           </>
        )
    }
}