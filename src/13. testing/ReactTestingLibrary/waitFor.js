import "regenerator-runtime/runtime";
import React from 'react';
import {App} from '../App.js'
// import waitFor below
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import {waitFor} from '@testing-library/react';

test('Should show Thought to be removed' , async () => {
  render(<App/>);
  const input = screen.getByRole('input');
  const submit = screen.getByRole('submit')
  userEvent.type(input, 'I have to call my mom.');
  userEvent.click(submit)

  // fix this logic!  
  await waitFor(() => {
    const thought = screen.queryByText('I have to call my mom.');
    expect(thought).toBeNull();
  })
});