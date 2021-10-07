/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import Birth from "./ModalContents/Birth";
import NickName from "./ModalContents/NickName";
import { User } from "./Profile";
const Modal: React.FC<{
  visible: boolean;
  setTab: any;
  content: string;
  userState: User;
  setUserState: any;
}> = React.memo(
  ({ children, visible, setTab, content, userState, setUserState }) => {
    const modalRef = useRef<HTMLDivElement>(null);
    // const handleOuterClick = ({ target }: any) => {
    //   console.log("handle");
    //   if (visible && !modalRef.current?.contains(target)) setTab(false);
    // };
    // useEffect(() => {
    //   window.addEventListener("click", handleOuterClick);
    //   return window.removeEventListener("click", handleOuterClick);
    // }, []);
    return (
      <>
        <ModalOverlay visible={visible} />
        <ModalWrapper visible={visible} /*onClick={handleOuterClick}*/>
          <ModalInner ref={modalRef}>
            <button className="btn_close" onClick={() => setTab(false)}>
              X
            </button>
            {content === "nickname" ? (
              <NickName
                userState={userState}
                setUserState={setUserState}
                setTab={setTab}
              />
            ) : null}
            {content === "birth" ? (
              <Birth userState={userState} setUserState={setUserState} />
            ) : null}
          </ModalInner>
        </ModalWrapper>
      </>
    );
  }
);

const ModalWrapper = styled.div<{ visible: boolean }>`
  box-sizing: border-box;
  display: ${(props) => (props.visible ? "block" : "none")};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 800;
  overflow: auto;
  outline: 0;
  padding: 10px 5px;
`;
const ModalOverlay = styled.div<{ visible: boolean }>`
  box-sizing: border-box;
  display: ${(props) => (props.visible ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 799;
`;

const ModalInner = styled.div`
  box-sizing: border-box;
  position: relative;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  background-color: #fff;
  border-radius: 10px;
  width: 360px;
  max-width: 480px;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
  padding: 20px 20px;
  z-index: 801;
  .btn_close {
    position: absolute;
    top: 0;
    right: 0;
    border: none;
    border-radius: 10px;
  }
`;
export default Modal;
