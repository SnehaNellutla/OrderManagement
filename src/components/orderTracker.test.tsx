import React from 'react';
import { render, screen } from '@testing-library/react';
import { OrderTracker } from './orderTacker';

describe('OrderTracker', () => {
  it('fetches and displays data correctly', async () => {
    const mockData = {
       customerName: "Duke",
      createdDate: "Tuesday, 11 April 2023",
      createdByUserName: "Talen"
    };
    
    // mock the fetch call to return the mock data object
    global.fetch = jest.fn().mockResolvedValue({
      json: () => Promise.resolve(mockData),
    });
    
    render(<OrderTracker />);
    
    // wait for the component to render and for the API call to finish
    await screen.findByText(mockData.customerName);
    
    // verify that the data is displayed correctly on the page
    expect(screen.getByText(mockData.customerName)).toBeInTheDocument();
  });
});
