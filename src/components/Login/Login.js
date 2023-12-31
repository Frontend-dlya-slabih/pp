import { useState } from 'react';
import {Button} from '../Button/Component.jsx';
import {Input} from "../Input/Component.jsx"


import '../Login/Login.css';

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 

  return (
    <div className='login'>
      <div className='container'>
        <div className='login__title'>Добро пожаловать на сайт</div>
        <div className='login__title' id={["blue__text"]}>Производственная практика</div>
        <Input 
          label = 'Адрес электронной почты' 
          placeholder = 'Введите ваш e-mail' 
          type = 'email'
          value = {email}
          onChange = {e => setEmail(e.target.value)}
        />
        <Input 
          label='Пароль' 
          placeholder='********' 
          type='password'
          value = {password}
          onChange = {e => setPassword(e.target.value)}
        />
        <div className='remember__forgot'>
          <Input
            type='checkbox'
            label='Запомнить меня'
          />
          <a href='https://vk.com/im?sel=487548034' className='forget__password'>Забыли пароль?</a>
        </div>
        <Button
          onClick={Button}
          fullWidth
        />
        <div className='registration'>
          <div className='registration__text'>Нет аккаунта?</div>
          <a href='https://vk.com/im?sel=487548034' className='registration__text' id={["blue__text"]}>Регистрация</a>
        </div>
      </div>    
    </div>
  );
}