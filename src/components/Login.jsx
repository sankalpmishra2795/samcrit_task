import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { addNote } from '../redux/action'

class Login extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             email:''
        }
    }

    inputHandler = (e) => {
        this.setState({
            email: e.target.value
        })
        
        if(this.state.email.trim() !== '') {
            this.props.addNote(this.state.email)
        }
    }
    
    render() {
        return (
            <div className='w-100 d-flex align-items-center justify-content-center' style={{ height:'78.7vh'}}>
                <div className="mx-auto w-25 my-h-30 text-center rounded card shadow">
                    <div className='mt-3'>
                        <input className='rounded py-1 px-2 mt-3' onChange={this.inputHandler} value={this.state.email} type="email" placeholder="Enter your email" />
                        <Link to='/'>
                            <button className='outline-none text-white bg-success py-2 px-3 mt-3 border rounded'>
                                Submit
                            </button>
                        </Link>
                    </div>
                </div>                
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    isHide: state.isHide,
})

const mapDispatchToProps = {
    addNote: addNote
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);

