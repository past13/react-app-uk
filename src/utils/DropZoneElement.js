import React, {useEffect, useState} from 'react';
import {useDropzone} from 'react-dropzone';
import removeicon from './../assets/remove-icon.png';
import PhotoStyles from './PhotoStyles';

const DropZoneElement = () => {
  const [files, setFiles] = useState([]);
  const {getRootProps, getInputProps} = useDropzone({
    accept: 'image/*',
    onDrop: acceptedFiles => {
      
      if (acceptedFiles.length <= 8) {
        setFiles(acceptedFiles.map((file, index) => 
          Object.assign(file, {
            preview: URL.createObjectURL(file),
            id: index
          }
        )));
      } else {
        alert('Maximum 8 photos allow');
      }
    }
  });

  useEffect(() => () => {
    files.forEach(file => URL.revokeObjectURL(file.preview));
  }, [files]);

 
  const removeImage = async (id) => {
    setFiles(files.filter( file => file.id !== id));
}

  return (
    <PhotoStyles>
      <section className="container">
        <div {...getRootProps({className: 'dropzone'})}>
          <input {...getInputProps()} />
          <p id="dropzone">Drag 'n' drop</p>
        </div>
          <aside className="thumbsContainer">
            {files.map(file => (
              <div className="photoContainer" key={file.id}>
                <img
                  className="removeIcon"
                  src={removeicon}
                  alt=""
                  onClick={removeImage.bind(this, file.id)}
                />
                <div className="thumb"> 
                  <div className="thumbInner">
                    <img
                      src={file.preview}
                      className="img"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            ))}
          </aside>
      </section>
    </PhotoStyles>
  );
}

export default DropZoneElement;