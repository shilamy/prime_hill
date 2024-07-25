// components/ServiceItem.tsx

interface ServiceItemProps {
  icon: string;
  title: string;
  description: string;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ icon, title, description }) => {
  return (
    <div className="Service__item card">
      <div className="card-body">
        <i title={icon} className="card-icon"></i>
        <h2 className="card-title">{title}</h2>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
};

export default ServiceItem;