
import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface OrderFormInputsProps {
  name: string;
  setName: (value: string) => void;
  email: string;
  setEmail: (value: string) => void;
  phone: string;
  setPhone: (value: string) => void;
}

const OrderFormInputs: React.FC<OrderFormInputsProps> = ({
  name,
  setName,
  email,
  setEmail,
  phone,
  setPhone
}) => {
  return (
    <>
      <div className="space-y-2">
        <Label htmlFor="name">Ваше имя</Label>
        <Input 
          id="name" 
          placeholder="Введите ваше имя" 
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input 
          id="email" 
          type="email" 
          placeholder="Введите ваш email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="phone">Телефон</Label>
        <Input 
          id="phone" 
          placeholder="+7 (999) 123-45-67" 
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
      </div>
    </>
  );
};

export default OrderFormInputs;
