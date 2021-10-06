import React from "react";

const Card: React.FC = () => {
  return (
    <section>
      <div>
        <span>Name</span>
        <span>age(34)</span>
      </div>
      <ul>
        <li>웃음이 많아요</li>
        <li>혼자 잘 놀아요</li>
        <li>예의가 발라요</li>
      </ul>
      <ol>
        <button>X</button>
        <button>Like</button>
        <button>Star</button>
      </ol>
    </section>
  );
};
export default Card;
