import PropTypes from "prop-types";
import { TableRow, TableCell, Checkbox } from "@mui/material";

const DashboardTableBodyCell = ({ data, dataIndex }) => {
  return (
    <TableRow key={dataIndex}>
      <TableCell className="table-cell" key={1}>
        {data.name}
      </TableCell>
      <TableCell className="table-cell" key={2}>
        {data.rollNo}
      </TableCell>
      <TableCell className="table-cell" key={3}>
        {data.branch}
      </TableCell>
      <TableCell className="table-cell" key={4}>
        {data.phoneNo}
      </TableCell>
      <TableCell className="table-cell" key={5}>
        {data.emailId}
      </TableCell>
      <TableCell className="table-cell" key={6}>
        {data.gender}
      </TableCell>
      <TableCell className="table-cell" key={7}>
        <Checkbox checked={data.basePacakge} />
      </TableCell>
      <TableCell className="table-cell" key={8}>
        <Checkbox checked={data.dreamPackage} />
      </TableCell>
      <TableCell className="table-cell" key={9}>
        <Checkbox checked={data.superDreamPackage} />
      </TableCell>
      <TableCell className="table-cell" key={10}>
        <Checkbox checked={data.blackListed} />
      </TableCell>
    </TableRow>
  );
};

DashboardTableBodyCell.propTypes = {
  data: PropTypes.object.isRequired,
  dataIndex: PropTypes.number.isRequired,
};

export default DashboardTableBodyCell;
