import {useRef} from 'react';
import './CreateSpectacle.css'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Upload from '../../assets/images/upload.svg';
 


function CreateSpectacle() {
  
  const upload = ()=>{
      document.getElementById("selectImage").click()
  }
  return (
    <div className='create-spectacle'>
        <div className='create-spectacle-inner'>
            <div className='spectacle-content'>
                <form action="">
                    <div className='append'>
                        <div className='input-form'>
                            <input type="text" placeholder='სათაური-ka' />
                            <input type="text" placeholder='სათაური-en' />
                        </div>
                        <div className='editor'>
                            <CKEditor
                                editor={ ClassicEditor }
                                data="<p>Hello from CKEditor 5!</p>"
                                onReady={ editor => {
                                    // You can store the "editor" and use when it is needed.
                                    console.log( 'Editor is ready to use!', editor );
                                } }
                                onChange={ ( event, editor ) => {
                                    const data = editor.getData();
                                    console.log( { event, editor, data } );
                                } }
                                onBlur={ ( event, editor ) => {
                                    console.log( 'Blur.', editor );
                                } }
                                onFocus={ ( event, editor ) => {
                                    console.log( 'Focus.', editor );
                                } }
                            />
                        </div>
                        <div className='upload-image'>
                            <input type="text" placeholder='ატვირთე სურათი' />
                            <input type="file" hidden id='selectImage'/>
                            <div className='uploading' onClick={upload} >
                                <img src={Upload} alt="upload" />
                            </div>
                        </div>
                    </div>
                    <button className='submit-btn'>შენახვა</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default CreateSpectacle