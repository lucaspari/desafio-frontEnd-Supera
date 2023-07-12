import { DatePicker } from "@mui/x-date-pickers";
import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import styled from "styled-components";
export const FormTable = () => {
  const [beginDate, setBeginDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [operatorName, setOperatorName] = useState<string>("");
  const handleBeginDateChange = (date: Date | null) => {
    setBeginDate(date);
  };

  const handleEndDateChange = (date: Date | null) => {
    setEndDate(date);
  };
  const handleOperatorNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setOperatorName(event.target.value);
  };

  return (
    <>
      <form>
        <FlexContainer>
          <DatePicker
            value={beginDate}
            onChange={handleBeginDateChange}
            label="Data de início"
          />
          <DatePicker
            label="Data de fim"
            value={endDate}
            onChange={handleEndDateChange}
          />
          <TextField
            value={operatorName}
            onChange={handleOperatorNameChange}
            label="Nome operador transacionado"
          />
        </FlexContainer>
        <PesquisarButton>
          <Button variant="outlined">Pesquisar</Button>
        </PesquisarButton>
      </form>
      <FlexContainer>
      <Box width="100%">
    <ExtendTable>
    <MoneyInfo>
    <Typography fontSize={20} m={1}>
        Saldo Total R$ 50,00
      </Typography>
      <Typography fontSize={20} m={1}>
        Saldo no período: R$ 50,00
      </Typography>
    </MoneyInfo>
      <TableContainer >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Dados</TableCell>
              <TableCell>Valentia</TableCell>
              <TableCell>Tipo</TableCell>
              <TableCell>Nome operador transacionado</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Data 1</TableCell>
              <TableCell>Data 2</TableCell>
              <TableCell>Data 3</TableCell>
              <TableCell>Data 4</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </ExtendTable>
    </Box>
      </FlexContainer>

    </>
  );
};
const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2em;
  margin: 2em 0em;
  align-items: center;
`;
const PesquisarButton = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const ExtendTable = styled.div`
gap: 2em;
border: 1px solid;
`
const MoneyInfo = styled.div`
display: flex;
gap: 2em;
border-bottom: 1px solid;
`
