import React from "react";

const NickName: React.FC<{ setUserState: any }> = (props: any) => {
  const { setUserState } = props;
  return (
    <>
      <label>닉네임을 변경하시겠어요?</label>
      <input type="text" />
      <button>닉네임 변경</button>
      <button>돌아가기</button>
    </>
  );
};

export default NickName;
