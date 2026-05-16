import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";

export default class AppComponent extends React.Component {

    state = {
        person: [
            { id: 1, name: "Binh Minh", dateOfBirth: 2006, address: "Bmt"},
            { id: 2, name: "Anhvux", dateOfBirth: 2006, address: "Bmt"},
            { id: 3, name: "anh", dateOfBirth: 2006, address: "Bmt"},
        ]
    }

    AddNewPerson = (person) => {
        this.setState({
            person: [...this.state.person, person]
        })
    }

    render() {
        return (
            <>
                <AddComponent AddNewPerson={this.AddNewPerson}/>
                <ChildComponent person={this.state.person}/>
            </>
        )
    }
}