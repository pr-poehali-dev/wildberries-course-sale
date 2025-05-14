
import React from 'react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

interface PaymentMethod {
  value: string;
  label: string;
  icon: string;
}

interface PaymentMethodSelectorProps {
  value: string;
  onChange: (value: string) => void;
}

const PaymentMethodSelector: React.FC<PaymentMethodSelectorProps> = ({ value, onChange }) => {
  const paymentMethods: PaymentMethod[] = [
    {
      value: "card",
      label: "Банковская карта онлайн",
      icon: "CreditCard"
    },
    {
      value: "sbp",
      label: "Система быстрых платежей (СБП)",
      icon: "Banknote"
    },
    {
      value: "invoice",
      label: "Счет на оплату (юр. лица)",
      icon: "FileText"
    }
  ];

  return (
    <div className="space-y-2">
      <Label>Способ оплаты</Label>
      <RadioGroup 
        value={value} 
        onValueChange={onChange}
        className="flex flex-col space-y-2"
      >
        {paymentMethods.map((method) => (
          <div 
            key={method.value}
            className="flex items-center space-x-2 border rounded-md p-3 cursor-pointer hover:bg-muted transition-colors"
          >
            <RadioGroupItem value={method.value} id={`payment-${method.value}`} />
            <Label htmlFor={`payment-${method.value}`} className="cursor-pointer flex items-center">
              <Icon name={method.icon} className="mr-2 h-5 w-5 text-wb-purple" />
              {method.label}
            </Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default PaymentMethodSelector;
