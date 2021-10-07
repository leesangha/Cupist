import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import React, { useState } from "react";
import styled from "styled-components";

const Birth: React.FC<{ userState: any; setUserState: any }> = (props: any) => {
  const { userState, setUserState } = props;
  const [date, setDate] = useState(new Date());
  return (
    <Wrapper>
      <label>생일을 변경하시겠어요?</label>
      <p>1회만 변경 가능하니 신중히 입력해주십시오</p>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <DatePicker
          disableFuture
          openTo="year"
          format="yyyy/MM/dd"
          views={["year", "month", "date"]}
          value={date}
          onChange={setDate}
        />
      </MuiPickersUtilsProvider>
      <button>생일 변경</button>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .MuiFormControl-root {
    width: 100%;
  }
  label {
    font-weight: bold;
  }
  p {
    font-size: 12px;
  }
  button {
    display: block;
    width: 100%;
    margin-top: 10px;
    outline: none;
    border: none;
    border-radius: 6px;
    height: 30px;
    background-color: #4379e6;
    color: #ffffff;
  }
`;
export default Birth;
