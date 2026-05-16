import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";

export default class MyComponent extends React.Component {

    state = {
        arrJobs: [
            {id: 1, title: "developer", salary: "500"},
            {id: 2, title: "teacher", salary: "200"},
            {id: 3, title: "doctor", salary: "300"},
            {id: 4, title: "tester", salary: "100"},
        ]
    }

    AddNewJob = (job) => {
        this.setState({
            arrJobs: [...this.state.arrJobs, job]
        })
    }

    deleteJob = (job) => {
        this.setState({
            arrJobs: this.state.arrJobs.filter(item => item.id !== job.id) 
        })
    }
 
    render() {
        return (
            <>
                <AddComponent AddNewJob={this.AddNewJob}/>
                <ChildComponent 
                arrJobs={this.state.arrJobs} deleteJob={this.deleteJob}
                />
            </>
        );
    }
}

