import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ poke }) {
  const {id, name, hp, sprites: {front, back}} = poke
  const [image, setImage] = useState(front)

  function handleClickImage() {
    if (image === front) {
      setImage(back)
    } else {
      setImage(front)
    }
  }
  
  return (
    <Card>
      <div onClick={handleClickImage}>
        <div className="image">
          <img alt="oh no!" src={image}/>
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp} hp
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
