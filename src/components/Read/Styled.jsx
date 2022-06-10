import styled from "styled-components";

export const Container = styled.div`
  margin-top: 2rem;
  .tableBox {
    padding-left: 20px;
    padding-right: 20px;
  }
`;
const handleColorType = (color) => {
  switch (color) {
    case "green":
      return "color:#FFF; background: #61dea4";
    case "red":
      return "color:#FFF; background: #f45e6d";
    case "yellow":
      return "color:#252a31; background: #ffe761";
    default:
      return "color:#252a31; background: #ebeff5";
  }
};
export const BlockItem = styled.div`
  ${({ color }) => handleColorType(color)};
  width: 49.5%;
  height: 200px;
  border-radius: 5px;
  position: relative;
  margin-top: 1%;
  a {
    text-decoration: none;
    position: absolute;
    top: 100px;
    right: 40px;
  }
`;
export const Table = styled.table``;
export const Thead = styled.thead``;
export const Tbody = styled.tbody``;
