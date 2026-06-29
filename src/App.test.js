// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders CoreForge title', () => {
    render(<App />);
    const titleElement = screen.getByText(/CoreForge/i);
    expect(titleElement).toBeInTheDocument();
});
