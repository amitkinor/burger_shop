import React, { Component } from 'react';

import Button from '../../../components/UI/Button/Button';
import axiosInstance from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';
import classes from './ContactData.module.css';

export default class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: '',
    },
    loading: false,
  };

  orderHandler = (event) => {
    event.preventDefault();
    const { ingredients, price, history } = this.props;
    this.setState({ loading: true });

    const order = {
      ingredients,
      price,
      customer: {
        name: 'Amit kinor',
        address: {
          street: 'test street',
          zip: '65456',
          country: 'Germany',
        },
        email: 'test@mail.com',
      },
      deliveryMethod: 'fastest',
    };

    axiosInstance
      .post('/orders.json', order)
      .then(() => {
        this.setState({ loading: false });
        history.push('/');
      })
      .catch(() => {
        this.setState({ loading: false });
      });
  };

  render() {
    const { loading } = this.state;
    let form = (
      <>
        <h4>Enter your Contact Data</h4>
        <form>
          <input
            className={classes.input}
            type="text"
            name="name"
            placeholder="Your Name"
          />
          <input
            className={classes.input}
            type="text"
            name="email"
            placeholder="Your Email"
          />
          <input
            className={classes.input}
            type="text"
            name="street"
            placeholder="Street"
          />
          <input
            className={classes.input}
            type="text"
            name="postal"
            placeholder="Postal Code"
          />
          <Button type="button" btnType="Success" clicked={this.orderHandler}>
            Order
          </Button>
        </form>
      </>
    );
    if (loading) {
      form = <Spinner />;
    }
    return (
      <div className={classes.ContactData}>
        {form}
      </div>
    );
  }
}
