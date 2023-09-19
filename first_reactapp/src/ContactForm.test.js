import React from 'react';
import { render, fireEvent, screen, act, waitFor } from '@testing-library/react';
import ContactForm from './components/ContactForm'



  test('should load items eventually', async () => {
    render(<ContactForm />)

     await act(async () => {
        fireEvent.click(screen.getByRole('button', { type: 'submit' }));
     })

  });


  test("submits form with valid inputs and calls onSubmit", async () => {
    const onSubmitMock = jest.fn();

    const {getByLabelText, getByText} = render(<ContactForm onSubmit={onSubmitMock} />);

    fireEvent.change(getByLabelText('FirstName'), { target: { value: 'John' } });
    fireEvent.change(getByLabelText('LastName'), { target: { value: 'Doe' } });
    fireEvent.change(getByLabelText('Email'), { target: { value: 'test@example.com' } });
    fireEvent.change(getByLabelText('Enquiry'), { target: { value: 'Hello, I have a question.' } });

    //submitting form
    fireEvent.click(getByText("Submit"));

    await act(async () => {
        await waitFor(() => {
          expect(onSubmitMock).toHaveBeenCalledTimes(1);
    
          // assume inputs are reset, resetForm is called.
          expect(getByLabelText('FirstName').value).toBe('');
          expect(getByLabelText('LastName').value).toBe('');
          expect(getByLabelText('Email').value).toBe('');
          expect(getByLabelText('Enquiry').value).toBe('');
        });
    
      });


  })
