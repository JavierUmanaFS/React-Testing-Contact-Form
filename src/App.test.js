import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";
import ContactForm from './components/ContactForm';


test('contact form taking user inputs', () => {
  const { getByLabelText } = render(<ContactForm />);

  const firstInput = getByLabelText(firstInput, { target: { name: 'firstName', value: 'Ty' } })

  fireEvent.change(firstInput, { target: { name: 'firstName', value: 'Ty' } })
});