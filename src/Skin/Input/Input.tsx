import React from 'react';
import './Input.scss'

export const Input = ({ coord, placeholder, hendelInput, OnKeyUp }: {
  coord: string;
  placeholder: string;
  hendelInput: (value: string, param: string) => void;
  OnKeyUp: (event: React.KeyboardEvent<HTMLInputElement>, coord: string) => void;
}) => {
  return (
    <div className="input">
      <span className="input__text">{`${coord} value`}</span>
      <input
        placeholder={placeholder}
        onBlur={(event) => hendelInput(event.target.value, coord)}
        onKeyUp={(event) => OnKeyUp(event, coord)}
        type="text" className={`input__${coord}Values`} />
    </div>
  );
};
