
import React from 'react';
import Icon from '@/components/ui/icon';

const PaymentSecurityInfo: React.FC = () => {
  return (
    <div className="p-3 bg-wb-purple/5 rounded-md border border-wb-purple/20 flex items-start">
      <Icon name="Shield" className="h-5 w-5 text-wb-purple mr-2 mt-0.5 shrink-0" />
      <p className="text-sm text-muted-foreground">
        Все платежи обрабатываются через защищенное соединение. Ваши данные защищены по протоколу SSL.
      </p>
    </div>
  );
};

export default PaymentSecurityInfo;
