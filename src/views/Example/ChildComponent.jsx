import React from 'react'

export default class ChildComponent extends React.Component {

    state = {
        showJob: false
    }

    handleShowHide = () => {
        this.setState({
            showJob: !this.state.showJob
        })
    }

    handleDelete = (job) => {
        this.props.deleteJob(job)
    }

    render() {
        let { arrJobs } = this.props;
        let { showJob } = this.state;
        return (
            <>
                <div><button onClick={this.handleShowHide}>{showJob === true ? "Hide" : "Show"}</button></div> 
                {showJob === true &&
                    <>
                        <div className='job-lists'>
                        {
                            arrJobs.map((items) => {
                                return (
                                    <div key={items.id}>
                                        {items.title} - {items.salary}$ <span onClick={() => this.handleDelete(items)}>x</span>
                                    </div>
                                );
                            })
                        }
                        </div>   
                    </>
                }
            </>
        ) 
    }
}

// const ChildComponent = (props) => {
//     const { arrJobs } = props
//     return (
//         <>
//             <div className='prop-lists'>
//                 {
//                     arrJobs.map((items) => {
//                         return (
//                             <li key={items.id}>
//                                 {items.id} - {items.title} - {items.salary}
//                             </li>
//                         );
//                     })
//                 }
//             </div>
//         </>
//     );
// }

// export default ChildComponent;