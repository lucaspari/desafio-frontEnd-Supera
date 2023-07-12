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
import React, { useState } from "react";
import styled from "styled-components";
import Transferencia from "../types/transferencia";
import { helpers } from "../helpers/helpers";
import { transferenciaAPI } from "../api/transferenciaAPI";
export const FormTable = () => {
  const [beginDate, setBeginDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [operatorName, setOperatorName] = useState<string>("");
  const [transferencias, setTransferencias] = useState<Transferencia[]>([]);
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
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await transferenciaAPI.fetchTransactions();
        setTransferencias(data);
      } catch (error) {
        console.log("Error:", error);
      }
    };

    void fetchData();
  }, []);
  const handleClick = () => {
    if (beginDate && endDate) {
      void transferenciaAPI
        .fetchTransactionsBetweenDate(
          helpers.formatDateToString(beginDate),
          helpers.formatDateToString(endDate)
        )
        .then((data) => {
          setTransferencias(data);
        });
    }
    else if(operatorName){
      void transferenciaAPI.fetchTransactionsByNomeOperador(operatorName).then((data) => {
        setTransferencias(data);
      });
    }
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
          <Button onClick={handleClick} variant="outlined">
            Pesquisar
          </Button>
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
            <TableContainer>
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
                  {transferencias.map((transferencia) => (
                    <TableRow key={transferencia.id}>
                      <TableCell>
                        {helpers.formatDateStringToString(
                          transferencia.dataTransferencia
                        )}
                      </TableCell>
                      <TableCell>{transferencia.valor}</TableCell>
                      <TableCell>{transferencia.tipo}</TableCell>
                      <TableCell>
                        {transferencia.nomeOperadorTransacao}
                      </TableCell>
                    </TableRow>
                  ))}
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
`;
const MoneyInfo = styled.div`
  display: flex;
  gap: 2em;
  border-bottom: 1px solid;
`;
