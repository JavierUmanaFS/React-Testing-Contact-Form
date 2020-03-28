import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ContactForm from './ContactForm';

test('renders correctly', () => {
  render(<ContactForm />);
})

test('contact form has email input', () => {
  const { getByLabelText } = render(<ContactForm />);
  const emailInput = getByLabelText(/Email/)
  expect(emailInput).toBeInTheDocument();
})

test('contact form has message input', () => {
  const { getByLabelText } = render(<ContactForm />);
  const messageInput = getByLabelText(/message/i);
  expect(messageInput).toBeInTheDocument();
})