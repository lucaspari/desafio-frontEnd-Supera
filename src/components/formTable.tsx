import { DatePicker } from "@mui/x-date-pickers";
import { TextField } from "@mui/material";
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
    </form>
  );
};
const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2em;
  margin: 2em 0em;
  align-items: center;
`;
