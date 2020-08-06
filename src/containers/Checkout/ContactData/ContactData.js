/* eslint-disable array-callback-return */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';

import Button from '../../../components/UI/Button/Button';
import axiosInstance from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';
import classes from './ContactData.module.css';
import Input from '../../../components/UI/Forms/Input/Input';

export default class ContactData extends Component {
  state = {
    orderForm: {
      name: {
        value: '',
        name: 'name',
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your Name',
        },
      },
      street: {
        value: '',
        name: 'street',
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Street',
        },
      },
      zip: {
        value: '',
        name: 'ZIP Code',
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'ZIP Code',
        },
      },
      country: {
        value: '',
        name: 'country',
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Country',
        },
      },
      email: {
        value: '',
        name: 'email',
        elementType: 'email',
        elementConfig: {
          type: 'text',
          placeholder: 'Your Email',
        },
      },
      deliveryMethod: {
        value: '',
        name: 'deliveryMethod',
        elementType: 'select',
        elementConfig: {
          options: [
            { value: 'fastest', displayValue: 'Fastest' },
            { value: 'cheapest', displayValue: 'Cheapest' },
          ]
        },
      },
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

  inputChangedHandler = (event, inputIdentifier) => {
    const { orderForm } = this.state;
    const updatedFormData = { ...orderForm };
    const updateFormElement = { ...updatedFormData[inputIdentifier] };
    updateFormElement.value = event.target.value;
    updatedFormData[inputIdentifier] = updateFormElement;
    this.setState({ orderForm: updatedFormData });
  };

  render() {
    const { loading, orderForm } = this.state;
    const formInputs = [];
    const orderFormKeys = Object.keys(orderForm);
    orderFormKeys.map((iter) => {
      formInputs.push(
        <Input
          elementType={orderForm[iter].elementType}
          elementConfig={orderForm[iter].elementConfig}
          label={orderForm[iter].name}
          id={iter}
          key={iter}
          value={orderForm[iter].value}
          inputChangedHandler={(e) => this.inputChangedHandler(e, iter)}
        />,
      );
    });

    let form = (
      <>
        <h4>Enter your Contact Data</h4>
        <form>
          {formInputs}
          <Button type="button" btnType="Success" clicked={this.orderHandler}>
            Order
          </Button>
        </form>
      </>
    );
    if (loading) {
      form = <Spinner />;
    }
    return <div className={classes.ContactData}>{form}</div>;
  }
}
