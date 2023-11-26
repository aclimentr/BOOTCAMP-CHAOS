import { useState } from "react";

export default function Gallery({ data }) {
  const [firstFighter, setFirstFigher] = useState();
  const [secondFighter, setSecondFighter] = useState();
  const [selectedGladiators, setSelectedGladiators] = useState([]);

  const chooseFighter = (index) => {
    if (firstFighter) {
      setSecondFighter(data[index]);
    } else {
      setFirstFigher(data[index]);
    }
  };

  const filterCharacter =(value)=>{
      const filtered = data.filter((e)=> e.value.includes(e))
      setSelectedGladiators(filtered);
    }

  return (
    <div>
      <div style={{ display: "flex" }}>
        {data.map((item, index) => (
          <div key={index} onClick={() => chooseFighter(index)}>
            <h2>{item.name}</h2>
            <img width={200} src={item.avatar} alt={item.name} />
            <h3>{item.vitality}</h3>
          </div>
        ))}
      </div>

      {firstFighter && secondFighter && <button onClick={filterCharacter}>Fight!!</button>}
    </div>
  );
}
