import React from "react";
import { useContext } from "react";
import { Context } from "../../Context/Favoriteproduct";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import { FaTrash } from "react-icons/fa";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { AiOutlineStar } from "react-icons/ai";

function Favourite() {
  const { fav, setfav } = useContext(Context);
  const { count, setcount } = useContext(Context);
  const favdelte = (id) => {
    let deleteItem = fav.filter((x) => x.id !== id);
    setfav(deleteItem);
    setcount(fav.length-1);
  };
  return (
    <TableContainer component={Paper} id="maintable">
      <Table sx={{ minWidth: 650 }} aria-label="caption table">
        <TableHead id="tablehead2">
          <TableRow>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Price</TableCell>
            <TableCell align="center">Quantity</TableCell>
            <TableCell align="center">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {fav.map((items) =>(
              <TableRow key={items.id}>
                <TableCell align="center">{items.name}</TableCell>
                <TableCell align="center">{items.unitPrice}</TableCell>
                <TableCell align="center">{items.quantityPerUnit}</TableCell>
                <TableCell align="center">
                  <button className="btn" onClick={() => favdelte(items.id)}>
                  <FaTrash />
                  </button>
                </TableCell>
              </TableRow>
            )
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Favourite;
