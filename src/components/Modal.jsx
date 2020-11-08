import React, { Component } from 'react'
import {connect} from 'react-redux'
import { hideModal, submitNote } from '../redux/action'

class Modal extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name: '',
            description:''     
        }
    }

    handleChange = (e)=> {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = () => {
        const {name, description} = this.state;
        if(name.trim() !== '' && description.trim() !== '') {
            const data = {
                email: this.props.email,
                name: name,
                description: description,
            } 
            this.props.submitNote(data)
        }
    }
    
    render() {
        return (
            <div className='custom-modal'>
                <div className="text-white d-flex flex-column justify-content-center align-items-center rounded" style={{width:'340px'}}>
                    <div onClick={this.props.hideModal} className='py-0 my-0 pr-3 pointer align-self-end'>
                            <small>x</small>
                    </div>
                    <h3>Enter Note Details</h3>
                    <div>
                        <div>
                            <label htmlFor="">Name</label>
                        </div>
                        <input name='name' onChange={this.handleChange} value={this.state.name} type="text" className='rounded px-2' placeholder="Enter Note Name"/>
                    </div>
                    <div className='mt-3'>
                        <div>
                            <label htmlFor="">Description</label>
                        </div>
                        <textarea name="description" onChange={this.handleChange} value={this.state.description} className='rounded px-2' id="" cols="24" rows="5" placeholder='Max 60 words description...'></textarea>
                    </div>
                    <div className='align-self-start pl-3 ml-3'>
                        <button onClick={this.handleSubmit} className='btn-org py-1 px-3 rounded outline-none border-0 ml-1 mt-2'>
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    email: state.email,
})

const mapDispatchToProps = {
    hideModal: hideModal,
    submitNote: submitNote  
}

export default connect(mapStateToProps, mapDispatchToProps)( Modal);
