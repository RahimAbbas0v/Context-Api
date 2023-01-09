import React from 'react'
import { useContext,useEffect } from 'react';
import { Context } from '../../Context/Favoriteproduct';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { FaPlusSquare } from 'react-icons/fa';
import Paper from '@mui/material/Paper';
import { AiFillStar } from 'react-icons/ai';
import './Home.css';
import axios from 'axios'


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function Home() {
  const { list, setList } = useContext(Context);
  const { fav, setfav } = useContext(Context);
  const { count, setcount } = useContext(Context);
  useEffect(() => {
    axios
      .get("https://northwind.vercel.app/api/products")
      .then((res) => setList(res.data));
  }, []);
  const Fav = (favitem) => {
    if (fav.find(x => x.id == favitem.id)) {
      alert("Hal hazırda bu məhsul Favorite bölməsində mövcuddur")
    }
    else {
      setfav([...fav, favitem])
      setcount(fav.length+1)
    }
    
  }
  console.log(fav);
  // const product=list.filter(Element=>Element.id==id)
  // setfav([...fav,product])
  // console.log(fav);
  // setcount(fav.length+1)


return (
  <TableContainer component={Paper} id="maintable">
    <Table sx={{ minWidth: 700 }} aria-label="customized table" >
      <TableHead id="tablehead">
        <TableRow>
          <StyledTableCell align="center">Name</StyledTableCell>
          <StyledTableCell align="center">Price</StyledTableCell>
          <StyledTableCell align="center">Per Unit</StyledTableCell>
          <StyledTableCell align="center">Add Fav</StyledTableCell>

        </TableRow>
      </TableHead>
      <TableBody>
        {list.map((row) => (
          <StyledTableRow key={row.id}>
            <StyledTableCell align="center">{row.name}</StyledTableCell>
            <StyledTableCell align="center">{row.unitPrice}</StyledTableCell>
            <StyledTableCell align="center">{row.quantityPerUnit}</StyledTableCell>
            <StyledTableCell align="center"><button onClick={() => Fav(row)} id="addicon"><FaPlusSquare /></button></StyledTableCell>

          </StyledTableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
)
}

export default Home