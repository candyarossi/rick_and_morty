import styled from "styled-components";

const DivCard = styled.div`
  display: inline-block;
  background-color: rgb(72, 61, 139, 0.7);
  border-radius: 10px;
  color: white;
  overflow: hidden;
  margin: 25px 0px 25px 0px;
`;

const Button = styled.button`
  position: relative;
  right: -120px;
  top: 10px;
  background-color: pink;
  color: purple;
  border: 0px;
  width: 30px;
  height: 30px;
  border-radius: 5px;
  font-weight: bold;
  font-size: 15px;
`;

const styleSpecie = {
  display: "inline-block",
  fontSize: "16px",
  color: "violet",
  marginRight: "15px",
  marginTop: "-10px",
};

const styleGender = {
  display: "inline-block",
  fontSize: "16px",
  color: "deeppink",
  marginTop: "-10px",
};

// const styleName = {
//   position: 'relative',
//   bottom: '-280px',
//   backgroundColor: 'rgb(0,0,0,0.5)',
//   padding: '5px',
//   display: 'inline-block',
// }

export default function Card(props) {
  return (
    <DivCard>
      <Button onClick={props.onClose}>X</Button>
      <h2>{props.name}</h2>
      <h2 style={styleSpecie}>{props.species}</h2>
      <h2 style={styleGender}>{props.gender}</h2>
      {/* <h2 style={styleName}>{props.name}</h2> */}
      <img style={{ display: "block" }} src={props.image} alt="" />
    </DivCard>
  );
}
