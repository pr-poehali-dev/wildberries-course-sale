
import React from 'react';
import Icon from '@/components/ui/icon';

interface CourseFeatureProps {
  icon: string;
  title: string;
  description: string;
}

const CourseFeature: React.FC<CourseFeatureProps> = ({ icon, title, description }) => {
  return (
    <div className="flex items-start">
      <div className="h-10 w-10 rounded-full bg-wb-purple/10 flex items-center justify-center mr-4 shrink-0">
        <Icon name={icon} className="h-5 w-5 text-wb-purple" />
      </div>
      <div>
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

export default CourseFeature;
