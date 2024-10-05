const StatCard = ({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
}) => (
  <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow">
    {icon}
    <span className="text-2xl font-bold mt-2">{value}</span>
    <span className="text-sm text-gray-500">{label}</span>
  </div>
);

export default StatCard;
