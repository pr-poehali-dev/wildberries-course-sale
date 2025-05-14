
import React from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface SubmitButtonProps {
  paymentMethod: string;
  isSubmitting: boolean;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ paymentMethod, isSubmitting }) => {
  const getButtonText = () => {
    if (isSubmitting) return "Отправка...";
    
    switch (paymentMethod) {
      case 'card':
        return "Оплатить картой";
      case 'sbp':
        return "Оплатить через СБП";
      case 'invoice':
        return "Получить счет";
      default:
        return "Оплатить";
    }
  };

  return (
    <Button 
      type="submit" 
      className="w-full bg-wb-purple hover:bg-wb-pink text-white font-medium text-lg py-6"
      disabled={isSubmitting}
    >
      {isSubmitting ? (
        <>
          <Icon name="Loader2" className="mr-2 h-5 w-5 animate-spin" />
          Отправка...
        </>
      ) : (
        <>
          {getButtonText()}
          <Icon name="ArrowRight" className="ml-2 h-5 w-5" />
        </>
      )}
    </Button>
  );
};

export default SubmitButton;
