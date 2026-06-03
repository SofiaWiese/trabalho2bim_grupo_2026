import type { IconType } from "react-icons";

interface ServiceCardProps {
  Icon: IconType;
  title: string;
  description: string;
}

const ServiceCard = ({ Icon, title, description }: ServiceCardProps) => {
  return (
    <div className="flex flex-col items-center gap-2 p-4">
      <Icon size={48} className="text-white" />
      <h2 className="text-white text-lg font-bold">{title}</h2>
      <p className="text-xs text-gray-300">{description}</p>
    </div>
  );
};

export default ServiceCard;
