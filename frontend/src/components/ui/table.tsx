export const Table = ({ children }) => <table className="min-w-full divide-y divide-gray-200">{children}</table>;
export const TableHeader = ({ children }) => <thead className="bg-gray-100">{children}</thead>;
export const TableBody = ({ children }) => <tbody className="bg-white divide-y divide-gray-200">{children}</tbody>;
export const TableFooter = ({ children }) => <tfoot className="bg-gray-100">{children}</tfoot>;
export const TableHead = ({ children }) => <tr className="text-left text-xs font-medium text-gray-500">{children}</tr>;
export const TableRow = ({ children }) => <tr className="hover:bg-gray-100">{children}</tr>;
export const TableCell = ({ children }) => <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{children}</td>;
export const TableCaption = ({ children }) => <caption className="px-6 py-3 text-sm text-gray-700">{children}</caption>;
