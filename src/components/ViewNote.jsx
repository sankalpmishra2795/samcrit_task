import React, { Component } from 'react';
import {connect} from 'react-redux';
import { getSingleNote } from '../redux/action';

class ViewNote extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    componentDidMount = () => {
        const id = this.props.match.params.id
        this.props.getSingleNote(id);
    }
    render() {
        const {noteDetails} = this.props;
        return (
            <div style={{height: '75vh'}}>
                {noteDetails ? (
                    <div class="card text-white bg-info my-3 ml-3" style={{maxWidth: "18rem"}}>
                    <div class="card-header">Note Details</div>
                    <div class="card-body">
                        <h5 class="card-title">Name: {noteDetails.name}</h5>
                        <p class="card-text">Description: {noteDetails.description}</p>
                    </div>
                </div>
                ) : null}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    noteDetails: state.noteDetails
})

const mapDispatchToProps = {
    getSingleNote: getSingleNote
}


export default connect(mapStateToProps, mapDispatchToProps)(ViewNote);
