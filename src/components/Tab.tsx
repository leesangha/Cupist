import React, { useState } from "react";
import styled from "styled-components";
import Background from "../assets/human.jpg";
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
  position: relative;
  width: 300px;
  height: 400px;
  background: url(${Background});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  transition: 0.3s ease-in;
  h1 {
    position: absolute;
    margin-top: 300px;
    margin-left: 10px;
    background: rgba(255, 255, 255, 0.15);
    border-radius: 4px;
    /* border: 1px solid rgba(255, 255, 255, 0.18); */
    color: white;
    font-family: cursive;
    font-size: 12px;
    font-weight: lighter;
  }
`;
export default Tab;
