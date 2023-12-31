import React, { useState } from "react";
import './styles.css'
import {Input} from "../Input"
import {Button} from '../Button'

const RegistrationForm = () => {
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [institution, setInstitution] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="form-container">
      <h1>Регистрация на сайте</h1>
      <h2>Производственная практика</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="lastName">Фамилия</label>
          <Input
            type="text"
            id="lastName"
            placeholder= 'Введите вашу фамилию'
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
        <label htmlFor="firstName">Имя</label>
          <Input
            type="text"
            id="firstName"
            placeholder= 'Введите ваше имя'
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="institution">Учебное заведение</label>
          <Input
            type="text"
            id="institution"
            placeholder= 'Введите название вашего учебного заведения'
            value={institution}
            onChange={(e) => setInstitution(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <Input
            type="email"
            id="email"
            placeholder= 'Введите ваш e-mail'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Придумайте пароль</label>
          <Input
            type="password"
            id="password"
            placeholder= 'Введите пароль'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <h3><p2>Есть аккаунт?</p2><p1> Войти</p1></h3>
        </div>
        <Button type="submit">Зарегистрироваться</Button>
      </form>
    </div>
  );
}

export default RegistrationForm;