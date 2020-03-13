import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ContactForm from './components/ContactForm';

test('renders correctly', () => {
  render(<ContactForm />);
});
