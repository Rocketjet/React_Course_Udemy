import React, { useRef } from 'react';
import { render } from 'react-dom';
//==================================
const myContainerStyle = {
  maxWidth: '240px', margin: '5px auto 0',
  padding: '5px 0', backgroundColor: '#ddd',
  textAlign: 'center', border: '1px solid #000',
  fontSize: '16px', fontFamily: 'Helvetica'
};
const mySpacerStyle = { margin: '5px 0' };
const myButtonStyle = {
  padding: '5px 12px', backgroundColor: '#777',
  outline: 'none', borderRadius: '10px',
  color: '#fff', fontSize: '1.0rem'
};
const myInputStyle = {
  width: '90%', margin: '6px 0',
  fontSize: '18px', textAlign: 'center',
  backgroundColor: '#ff9', outline: 'none'
};
//==================================
function MyInputComponent(props) {
  return <input
    {...props.myInputAttributesObjectProps}
  />;
}
//==================================
function MyApp() {
  const myInputRef = useRef();
  const myClickHandler = () => {
    myInputRef.current.value = '';
  };
  const myInputAttributesObject = {
    placeholder: "Waiting...",
    ref: myInputRef,
    style: myInputStyle
  };
  //--------------------------------
  return (
    <div style={myContainerStyle}>
      <button
        onClick={myClickHandler}
        style={myButtonStyle}
      >
        Click to clear
      </button>
      <hr style={mySpacerStyle} />
      <MyInputComponent
        myInputAttributesObjectProps={
          myInputAttributesObject
        }
      />
    </div>
  );
}
render(<MyApp />, document.getElementById('root'));