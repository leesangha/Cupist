import React, { useState } from "react";
import UserIcon from "../assets/user.png";
import styled from "styled-components";
import Modal from "./Modal";

export type User = {
  [index: string]: string;
  nickname: string;
  birth: string;
};
const Profile: React.FC = React.memo(() => {
  const arr = [
    { key: "nickname", label: "닉네임" },
    { key: "birth", label: "생일" },
  ];
  const [userState, setUserState] = useState<User>({
    nickname: "홍길동",
    birth: "1996-07-28",
  });
  const [tab, setTab] = useState<boolean>(false);
  const [content, setContent] = useState<string>("");
  const ChangeStatus = (value: string) => {
    setTab(!tab);
    setContent(value);
  };
  return (
    <Section>
      <div>
        {/* <div>
          <img
            src={UserIcon}
            alt="userIcon"
            style={{ background: "transparent" }}
            onClick={() => {
              console.log("onClick");
            }}
          />
        </div> */}
        {tab ? (
          <Modal
            visible={tab}
            setTab={setTab}
            content={content}
            userState={userState}
            setUserState={setUserState}
          />
        ) : null}
        <div>
          <List>
            {arr.map(({ key, label }, index) => {
              return (
                <Items key={index}>
                  <label>{label}</label>
                  <span onClick={() => ChangeStatus(key)}>
                    {userState[key]}
                  </span>
                </Items>
              );
            })}
          </List>
        </div>
      </div>
    </Section>
  );
});
const Section = styled.section`
  justify-content: center;
  align-items: center;
  display: flex;
`;
const List = styled.ul`
  list-style: none;
  hr {
    display: none;
  }
`;
const Items = styled.li`
  label {
    float: left;
    width: 120px;
  }
  span {
    color: #29b6f6;
  }
`;

export default Profile;
