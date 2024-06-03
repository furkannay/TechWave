import React, { useState } from 'react';
import './OrderForm.css';
import phoneimg from './order.png';

function OrderForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [errors, setErrors] = useState({});
  const [showForm, setShowForm] = useState(false); // Yeni durum değişkeni

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      alert('Your order has been received!');
      setName('');
      setEmail('');
      setQuantity(1);
      setShowForm(false); // Formu gizle
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!name.trim()) {
      errors.name = 'Name required';
    }
    if (!email.trim()) {
      errors.email = 'Your e-mail adress required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Invalid e-mail adress';
    }
    if (!quantity || quantity < 1) {
      errors.quantity = 'Invalid quantity';
    }
    return errors;
  };

  const handleOrderButtonClick = () => {
    setShowForm(true); // Formu göster
  };

  return (
    <div className="order-container">
      <img src={phoneimg} alt="Phone-x-img" className="phoneimg" />
      {!showForm && ( // Sadece form gösterilmediğinde sipariş butonunu göster
        <button className={`order-button ${!showForm ? 'visible' : ''}`} onClick={handleOrderButtonClick}>
        Order Now!
      </button>
      )}
      {showForm && ( // Eğer form gösterilmeliyse
        <form className="order-form" onSubmit={handleSubmit}>
          <h2>Early Order Form</h2>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="quantity">Quantity</label>
            <input
              type="number"
              id="quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              min="1"
            />
            {errors.quantity && <span className="error">{errors.quantity}</span>}
          </div>
          <button type="submit">Order Now!</button>
        </form>
      )}
    </div>
  );
}

export default OrderForm;
