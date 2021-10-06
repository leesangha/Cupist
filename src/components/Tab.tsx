import React, { useState } from "react";
import styled from "styled-components";
import Card from "./Card";
const Tab: React.FC = () => {
  const [toggle, setToggle] = useState<number>(1);

  return (
    <Nav>
      <ul>
        <li>
          <Title active={toggle === 1} onClick={() => setToggle(1)}>
            glam
          </Title>
        </li>
        <li>
          <Title active={toggle === 2} onClick={() => setToggle(2)}>
            근처
          </Title>
        </li>
        <li>
          <Title active={toggle === 3} onClick={() => setToggle(3)}>
            라이브
          </Title>
        </li>
      </ul>
      <Content active={toggle === 1}>
        <h1>오늘의 추천</h1>
        <Card />
      </Content>
      <Content active={toggle === 2}>2</Content>
    </Nav>
  );
};
const Nav = styled.nav`
  height: 400px;
  ul {
    list-style: none;
    display: flex;
  }
`;
const Title = styled.div<{ active: boolean }>`
  /* display: ${(props) => (props.active ? "block" : "none")}; */
  border-bottom: ${(props) => (props.active ? "1px solid #0083cf" : "#ffffff")};
  transition: 0.3s ease-in;
  cursor: pointer;
`;
const Content = styled.div<{ active: boolean }>`
  display: ${(props) => (props.active ? "block" : "none")};
  transition: 0.3s ease-in;
`;
export default Tab;
