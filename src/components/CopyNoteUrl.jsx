import Reac, { useRef, useState} from 'react'
import { connect } from 'react-redux'
import { hideModal } from '../redux/action';

const CopyNoteUrl = (props) => {
    const [copySuccess, setCopySuccess] = useState('Copy url');
    const textAreaRef = useRef(null);
    const handleSubmit = () => {
        textAreaRef.current.disabled = false
        textAreaRef.current.select();
        document.execCommand('copy');
        textAreaRef.current.disabled = true
        setCopySuccess('Copied!');
    }
    return (
        <div className='custom-modal'>
                <div className="h-25 text-white d-flex flex-column justify-content-center align-items-center rounded" style={{width:'500px'}}>
                    <div onClick={props.hideModal} className='py-0 my-0 pr-3 pointer align-self-end'>
                            <small>x</small>
                        </div>
                    <h4 className='mb-3'>Copy Your Shareable URL </h4>
                    <input
                        className='px-3 w-75'
                        ref={textAreaRef}
                        cols="40" rows="0"
                        value={props.url}
                        disabled='true'
                    />
                    <div className='align-self-start w-100 pl-3 ml-3 text-center'>
                        <button onClick={handleSubmit} className='w-75 btn-org py-1 px-3 rounded outline-none border-0  mt-2 mr-5'>
                            {copySuccess}
                        </button>
                    </div>
                </div>
            </div>
    )
}

const mapStateToProps = (state) => ({
    url: state.url,
})

const mapDispatchToProps = {
    hideModal: hideModal,
}

export default connect(mapStateToProps, mapDispatchToProps)(CopyNoteUrl);