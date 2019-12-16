import React, {useEffect, useState} from 'react';
import {useDropzone} from 'react-dropzone';

const thumbsContainer = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginTop: 16
};

const thumb = {
  display: 'inline-flex',
  borderRadius: 2,
  border: '1px solid #eaeaea',
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 4,
  boxSizing: 'border-box'
};

const thumbInner = {
  display: 'flex',
  minWidth: 0,
  overflow: 'hidden'
};

const img = {
    display: 'block',
    width: 'auto',
    height: '100%'
};

const uploadZone = {
    fontSize: '12px',
    width: '120px',
    height: '90px'
}

const DropZoneElement = () => {

  const [files, setFiles] = useState([]);

  const {getRootProps, getInputProps} = useDropzone({
    accept: 'image/*',
    onDrop: acceptedFiles => {
      setFiles(acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      })));
    }
  });
  
//   const uploadedImage = async () => {
//     const container = document.getElementsByClassName('uploadPhotoPlaceHolder');
//     container.src = thumbs;

//     console.log(123)
//   }

  const uploadedImage = files.map(file => (
            <div style={thumb} key={file.name}>
                <div style={thumbInner}>
                <img
                    src={file.preview}
                    style={img}
                />
                </div>
            </div>
    ))

    // const thumbs = files.map(file => (
    //     <div style={thumb} key={file.name}>
    //         <div style={thumbInner}>
    //         <img
    //             src={file.preview}
    //             style={img}
    //         />
    //         </div>
    //     </div>
    // ));

  useEffect(() => () => {
    // Make sure to revoke the data uris to avoid memory leaks
    files.forEach(file => URL.revokeObjectURL(file.preview));
  }, [files]);

  return (
    <section>
      <div {...getRootProps({className: 'dropzone'})}>
        <input {...getInputProps()} />
        <div style={uploadZone}>Upload your photos</div>
      </div>
      <aside style={thumbsContainer}>
        {uploadedImage}
      </aside>
    </section>
  );
}

export default DropZoneElement;