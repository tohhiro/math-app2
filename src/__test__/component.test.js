import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('最初のテスト',()=>{
  test('hogeの文字列があるか', () => {
    render(<App />);
    const linkElement = screen.getByText(/Math-App2/i);
    expect(linkElement).toBeInTheDocument();
  });
})
