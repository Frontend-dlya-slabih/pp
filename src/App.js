import React, { Fragment } from 'react'
import Button from './components/Expamle/Component';

const Sandbox = () => (
    <Fragment>
    <div>
      <Button 
        onClick={Button} 
        disabled 
      />
    </div>
    <Button 
        onClick={Button} 
        fullWidth
        />
        

    </Fragment>
);

export default Sandbox;
