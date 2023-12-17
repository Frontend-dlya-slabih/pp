import React, { Fragment } from 'react'
import Button from './components/Expamle/Component';
import './App.css';
import {InputReg} from './components/InputReg'

const Sandbox = () => (
    <Fragment>
       <InputReg label='Адрес электронной почты' placeholder='Введите ваш e-mail' type='email' />
      <InputReg label='Пароль' placeholder='********' type='password' />
      <InputReg label='Номер телефона' placeholder='Введите ваш номер телефона' type='number' />
      <InputReg label='Имя аккаунта' placeholder='Введите ваш никнейм' type='text' />
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
