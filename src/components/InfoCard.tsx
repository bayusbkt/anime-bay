import { Card, CardContent } from "./ui/card";

const InfoCard = ({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) => (
  <Card className="bg-white hover:bg-gray-50 transition-colors">
    <CardContent className="flex items-center p-4">
      <div className="mr-3 text-blue-500">{icon}</div>
      <div>
        <h3 className="font-semibold text-sm">{title}</h3>
        <p className="text-xs text-gray-600">{value}</p>
      </div>
    </CardContent>
  </Card>
);

export default InfoCard;
