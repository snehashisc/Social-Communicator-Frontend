import React from 'react';

const MoreModal = (props) => {
    console.log (props.modalId,props.listOptions);
    return (
        <div  className="more-dropdown" id={props.modalId} role="dialog">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-body">
                        {props.listOptions}
                    </div>
                </div>
            </div>
         </div>
    );
};

export default MoreModal;