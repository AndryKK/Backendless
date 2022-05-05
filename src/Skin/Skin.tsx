import React, { useState } from 'react';
import "./Skin.scss"
import { Chart } from '../Chart/Chart';
import { Button } from './Button/Button';
import { Input } from './Input/Input';

export function Skin() {
  const [showAs, setShowas] = useState<string>("Bar");
  const [labels, setLabels] = useState<string[]>(['X, Y, Z'])
  const [data, setData] = useState<string[]>(['100, 200, 150'])

  const optionsView = ['Bar', 'Liner', 'Radar', 'Doughnut']

  const hendelChoose = (param: string) => {
    setShowas(param)
  }

  const hendelInput = (value: string, coord: string) => {
    if (coord === 'x') {
      setLabels([value]);
    }

    if (coord === 'y') {
      setData([value]);
    }
  }

  const OnKeyUp=(
    event:  React.KeyboardEvent<HTMLInputElement>,
    coord: string
  )=> {

    if (event.key === 'Enter' || event.key === '13') {
      hendelInput(event.currentTarget.value, coord)
    };
  };



  return (
    <div className="Skin">
      <Input 
        OnKeyUp={OnKeyUp}
        hendelInput={hendelInput}
        placeholder={data[0]}
        coord={'y'}
      />

      <Input
        OnKeyUp={OnKeyUp}
        hendelInput={hendelInput}
        placeholder={labels[0]}
        coord={'x'}
      />

     {/* if you want to add one more input,
     you also had to change hendelInput 
     and add new role for new input 
     selected by coord parameter */}

      <div className="Skin__diagram">
        <Chart 
          labels={labels} 
          dataIn={data}
          showAs={showAs}
        />
      </div>

      <div className="Skin__buttons">
        {optionsView.map(option =>
          <Button
          key={option}
            hendelChoose={hendelChoose}
            showAs={showAs}
            kind={option}
          />
        )}

       {/* if you want to add one more option, 
       just add it name to optionsView. 
       The name of it will be value 
       for swich case in Cart component*/}

      </div>
    </div>
  );
}
