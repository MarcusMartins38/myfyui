import { formatAmount } from '../lib/utils';
import Tag from './Tag';

type CardProps = {
  icon: React.ReactNode;
  title: string;
  value: number;
  tagText: string;
  tagColor: string;
  iconBgColor: string;
};

const Card = ({ icon, title, value, tagText, tagColor, iconBgColor }: CardProps) => {
  return (
    <div className="card flex-row items-center justify-between w-full max-w-xs p-6 bg-base-200 rounded-2xl mb-2 mr-2 shadow-md">
      <div className={`w-12 h-12 flex items-center justify-center rounded-lg ${iconBgColor}`}>
        {icon}
      </div>
      <div className="flex flex-col items-start justify-between">
        <span className="card-title text-sm">{title}</span>
        <h2 className="font-bold text-2xl">{formatAmount(value)}</h2>
      </div>
      <Tag text={tagText} color={tagColor} />
    </div>
  );
};

export default Card;
