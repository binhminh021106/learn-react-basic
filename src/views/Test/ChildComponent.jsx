import React from "react";

export default class ChildComponent extends React.Component {

    state = {
        showPerson: false
    }

    handleShowHide = () => {
        this.setState({
            showPerson: !this.state.showPerson
        })
    }

    render() {
        const { person } = this.props
        const { showPerson } = this.state
        return (
            <>
                <div><button className="btn btn-dark" onClick={this.handleShowHide}>{showPerson === true ? "Hide" : "Show"}</button></div>
                {showPerson &&
                    <div className="list-person">
                        {person.map((items) => {
                            return (
                                    <div key={items.id}>
                                        {items.name} - {items.dateOfBirth} - {items.address}
                                    </div>
                            )
                        })}
                    </div>
                }
            </>
        )
    }
}