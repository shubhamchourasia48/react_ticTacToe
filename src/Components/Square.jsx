import React from 'react';

// direct using object destructuring istead of using prop object (props)----{props.value}===>({value})=>{---{value}-----}
const Square = ({ value, onClick, isWinningSquare }) => {
  return (
    <button type="button" className="square" onClick={onClick} style={{fontWeight: isWinningSquare?'bold':'normal'}} >
      {value}
    </button>
  );
};

export default Square;
