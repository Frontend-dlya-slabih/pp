import './App.css';
import {InputReg} from './components/InputReg'
function App() {
  return (
    <>
      <InputReg label='Адрес электронной почты' placeholder='Введите ваш e-mail' type='email' />
      <InputReg label='Пароль' placeholder='********' type='password' />
      <InputReg label='Номер телефона' placeholder='Введите ваш номер телефона' type='number' />
      <InputReg label='Имя аккаунта' placeholder='Введите ваш никнейм' type='text' />
    </>
  );
}

export default App;
