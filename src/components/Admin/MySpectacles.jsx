import {useState} from 'react';
import './MySpectacles.css';
import {Link} from 'react-router-dom';
import DeleteStroke from '../../componentLogos/DeleteStroke';
import DeleteFill from '../../componentLogos/DeleteFill';
import Editfill from '../../componentLogos/EditFill';
import EditStroke from '../../componentLogos/EditStroke';

function MySpectacles() {
  const [hoverDelete,setHoverDelete] =useState(false);
  const handleHoverDelete = ()=>setHoverDelete(!hoverDelete);
  const removeHandlerDelete = ()=> setHoverDelete(false)

  const [hoverEdit,setHoverEdit] =useState(false);
  const handleHoverEdit = ()=>setHoverEdit(!hoverEdit);
  const removeHandlerEdit = ()=> setHoverEdit(false)

  
  return (
    <div className='my-spectacles'>
        <div className='my-spectacles-inner'>
            <div className='row'>
              <div className='col-xl-6'>
                <span className='admin-title'>სპექტაკლები</span>
              </div>
              <div className='col-xl-6'>
                <div className='add-btn'>
                  <Link to='create' >დამატება</Link>
                </div>
              </div>
              <div className='col-xl-12'>
                <div className='admin-list-items'>
                  <div className='admin-list-item'>
                      <span className='item-name' >ინციდენტი მეტროში</span>
                      <div className='icon-wrap'>
                        <div className='edit-icon' onMouseEnter={handleHoverEdit} onMouseLeave={removeHandlerEdit}  >
                          <Link to='#'>
                            {hoverEdit? <Editfill/> : <EditStroke/> }
                          </Link>
                        </div>
                          <div className='delete-icon' onMouseEnter={handleHoverDelete} onMouseLeave={removeHandlerDelete} >
                            <Link className='delete'   to='#' >
                              {hoverDelete? <DeleteFill/> :<DeleteStroke/> }
                            </Link>
                        </div>
                      </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default MySpectacles