import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Modal from './Modal';
import {connect } from 'react-redux';
import CopyNoteUrl from './CopyNoteUrl';

class Showcase extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        const {isHide, isUrl} = this.props
        return (
            <div className="container-fluid">
                {!isHide ? <Modal/> : null}
                {isUrl ? <CopyNoteUrl/>: null}
                {/* <CopyNoteUrl/> */}
                <div className="row my-3">
                    <div className="col-10 col-md-6" >
                        <img src="https://cdn.dribbble.com/users/2281811/screenshots/8140524/media/f4fe8ba82477b761c5b21dfa47d946ac.png" alt="" height='100%' width='100%' />
                    </div>
                    <div className="col-10 col-md-6 d-flex justify-content-center align-items-center">
                        <div>
                            <div className='mb-4'>
                                <i class="fas fa-book-reader fa-10x"></i>
                            </div>
                            <Link to='/login'>
                                <button type="button" class="outline-none btn btn-success px-5">Add Note</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    isHide: state.isHide,
    isUrl: state.isUrl,
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Showcase);
