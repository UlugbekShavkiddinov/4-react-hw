import './useRef.css';
import React from 'react';

function ModalSmth() {

    const containerRef = React.useRef(null)

    return (
        <>
            <div ref={containerRef} className='modal-wrapper '>
                <h1>Hello</h1>
                <h2>It's me</h2>

            </div >
            <span>To see how modal works with useRef click: </span>
            <button onClick={() => {
                containerRef.current.classList.toggle("block")
            }} >Click</button >
        </>

    )

}

export default ModalSmth;

