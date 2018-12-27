import React from 'react';

const UpdateHeaderPhoto = (props) => {
    return (
             <div className="container update-header-photo-modal">
                 <div className="modal" id= "update-header-photo">
                    <div className="modal-dialog modal-lg">
                         <div className="modal-content">        
                             <div className="modal-header">
                                 <h4 className="modal-title">Update Header Photo </h4>
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                             </div>
    
                            <div className="modal-body">
                            
                                <a href="#" className="upload-photo-item">                  
                                    <span class="glyphicon glyphicon-hdd"></span>
                                     <h6>Upload Photo</h6>
                                    <span>Browse your computer.</span>
                                 </a>

                                <a href="#" className="upload-photo-item" data-toggle="modal" data-target="#choose-from-my-photo">
                                    <span class="glyphicon glyphicon-picture"></span>
                                    <h6>Choose from My Photos</h6>
                                    <span>Choose from your uploaded photos</span>
                             </a>
			
                            </div>
                            

                            <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                            </div>
        
                         </div>
                    </div>
                 </div>
            </div>
    );
};

export default UpdateHeaderPhoto;