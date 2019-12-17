import styled from 'styled-components';

const PhotoStyles = styled.div`
    .photoContainer {
      position:relative;
    }

    .removeIcon {
      display:inline-block;
      position:absolute;
      right:0;
      top:10;
      height: 30px;
      width: 30px;
    }

    .thumbsContainer {
      display: flex;
      flexDirection: row;
      flexWrap: wrap;
      marginTop: 16;
    }

    .thumb {
      display: inline-flex;
      borderRadius: 2;
      border: 1px solid #eaeaea;
      marginBottom: 8;
      marginRight: 8;
      width: 100px;
      height: 100px;
      padding: 4px;
      boxSizing: border-box;
    }
    
    .thumbInner {
      display: flex;
      minWidth: 0;
      overflow: hidden;
    }

    .img {
      display: block;
      width: auto;
      height: 100%;
    }
`;

export default PhotoStyles;
