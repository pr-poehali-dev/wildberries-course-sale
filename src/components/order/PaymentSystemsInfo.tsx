
import React from 'react';

interface PaymentSystem {
  name: string;
  logoUrl: string;
}

const PaymentSystemsInfo: React.FC = () => {
  const paymentSystems: PaymentSystem[] = [
    {
      name: "Visa",
      logoUrl: "https://www.svgrepo.com/show/14823/visa.svg"
    },
    {
      name: "MasterCard",
      logoUrl: "https://www.svgrepo.com/show/14818/mastercard.svg"
    },
    {
      name: "МИР",
      logoUrl: "https://www.svgrepo.com/show/191819/mir.svg"
    },
    {
      name: "СБП",
      logoUrl: "https://www.svgrepo.com/show/374063/sbp.svg"
    }
  ];

  return (
    <div>
      <h4 className="font-medium mb-2 text-center">Принимаем к оплате</h4>
      <div className="flex justify-center space-x-4">
        {paymentSystems.map((system) => (
          <div key={system.name} className="bg-white p-1 rounded shadow-sm">
            <img src={system.logoUrl} alt={system.name} className="h-8" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaymentSystemsInfo;
