import TableBody from "./Table.Body";
import TableHead from "./Table.Head";

const Table = () => {
  return (
    <div className="tableView w-full pt-5">
      <table className="table-fixed bg-gray-600 border-collapse w-full border border-gray-900">
        <TableHead />
        <TableBody />
      </table>
    </div>
  );
};

export default Table;
