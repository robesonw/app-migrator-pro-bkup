export const Card = ({ children, className }) => (
  <div className={`bg-white shadow-md rounded-lg p-4 ${className}`}>{children}</div>
);

export const CardHeader = ({ children }) => <div className="border-b pb-2 mb-2 font-bold">{children}</div>;
export const CardFooter = ({ children }) => <div className="pt-2 border-t mt-2 text-sm text-gray-500">{children}</div>;
export const CardTitle = ({ children }) => <h3 className="text-lg font-semibold">{children}</h3>;
export const CardDescription = ({ children }) => <p className="text-sm text-gray-600">{children}</p>;
export const CardContent = ({ children }) => <div>{children}</div>;
