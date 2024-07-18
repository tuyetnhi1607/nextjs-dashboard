import { Metadata } from 'next';
import * as React from 'react';

export const metadata: Metadata = {
  title: 'Customers',
};
export interface ICustomersProps {
}

export default function Customers (props: ICustomersProps) {
  return (
    <div>
      <p>Customers Page</p>
    </div>
  );
}
