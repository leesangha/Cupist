import React, { useRef } from "react";
import styled from "styled-components";
const NickName: React.FC<{ setUserState: any; setTab: any }> = (props: any) => {
  const { setUserState, setTab } = props;
  const nickRef = useRef<HTMLInputElement>(null);
  return (
    <NickNameWrapper>
      <label>닉네임을 변경하시겠어요?</label>
      <InputWrapper>
        <input type="text" ref={nickRef} />
        <button
          className="btn_clear"
          onClick={() => {
            nickRef.current.value = "";
          }}
        ></button>
      </InputWrapper>
      <ButtonWrapper>
        <button className="btn_nick">닉네임 변경</button>
        <button className="btn_back" onClick={() => setTab(false)}>
          돌아가기
        </button>
      </ButtonWrapper>
    </NickNameWrapper>
  );
};
const NickNameWrapper = styled.div`
  label {
    font-weight: bold;
  }
`;
const InputWrapper = styled.div`
  width: 100%;
  height: 30px;
  margin-top: 20px;
  position: relative;
  display: inline-block;
  input {
    width: 100%;
    height: 30px;
    border: 1px solid gray;
    border-radius: 4px;
    outline: none;
    padding: 0;
  }
  .btn_clear {
    position: absolute;
    top: 0;
    right: 0;
    background: url("https://img.icons8.com/pastel-glyph/2x/cancel.png") center
      center no-repeat;
    background-size: 50%;
    height: inherit;
    width: 30px;
    border: none;
    cursor: pointer;
  }
`;
const ButtonWrapper = styled.div`
  button {
    display: block;
    margin-top: 10px;
  }
  .btn_nick {
    width: 100%;
    height: 30px;
    border: none;
    background: gray;
    border-radius: 4px;
  }
  .btn_back {
    width: 100%;
    height: 30px;
    border: none;
  }
`;
export default NickName;
