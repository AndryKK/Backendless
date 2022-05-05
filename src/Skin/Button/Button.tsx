import React from 'react';
import { Kind } from './Kind';
import { ShowAs } from './ShowAs';
import { HendelChoose } from './HendelChoose';
import './Button.scss'

export const Button = ({ hendelChoose, showAs, kind }: HendelChoose & ShowAs & Kind) => {
  return (
    <label htmlFor="button" className="text">
      {kind}
      <input
        onChange={() => hendelChoose(kind)}
        id="button" type="radio"
        checked={showAs === kind} />
    </label>
  );
};
