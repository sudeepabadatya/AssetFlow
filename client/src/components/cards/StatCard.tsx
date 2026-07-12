interface StatCardProps {
  title: string;
  value: number;
}

const StatCard = ({ title, value }: StatCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 border hover:shadow-lg transition">
      <h3 className="text-gray-500 text-sm">{title}</h3>

      <p className="text-3xl font-bold mt-2 text-slate-800">
        {value}
      </p>
    </div>
  );
};

export default StatCard;