import React, { Fragment } from 'react'
import {Button} from './components/Button';
import './App.css';
import {Input} from "./components/Input"

const Sandbox = () => (
    <Fragment>
      <Input label='Адрес электронной почты' placeholder='Введите ваш e-mail' type='email' />
      <Input label='Пароль' placeholder='********' type='password' />
      <Input label='Номер телефона' placeholder='Введите ваш номер телефона' type='number' />
      <Input label='Имя аккаунта' placeholder='Введите ваш никнейм' type='text' />
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
