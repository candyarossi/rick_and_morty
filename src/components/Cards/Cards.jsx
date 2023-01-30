import Card from "../Card/Card";
import styled from "styled-components";

const DivCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export default function Cards(props) {
  const { characters } = props;
  let i = 0;
  return (
    <DivCards>
      {characters.map((e) => (
        <Card
          name={e.name}
          species={e.species}
          gender={e.gender}
          image={e.image}
          onClose={() => props.onClose(e.id)}
          key={i++}
        />
      ))}
    </DivCards>
  );
}
