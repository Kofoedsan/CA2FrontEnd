import React, { useEffect, useState } from "react";

import URL from "./settings";

const FetchRecipes = () => {
  const [recipes, setRecipes] = useState([
    {
      title: "",
      ingredients: [],
      instructions: [
        {
          type: "",
          text: "",
        },
      ],
      image: "",
    },
  ]);

  useEffect(() => {
    getRecipesInfo();
  }, []);

  const getRecipesInfo = async () => {
    const res = await fetch(URL + "/api/fetch");
    const data = await res.json();
    setRecipes(...data.recipes, recipes);
    console.log(data.recipes);
  };
  let counter = 0;
  return (
    
    <div>
      <p> Title: {recipes.title} </p>
      <p> Ingredients: {recipes.ingredients}</p>
      <p> Instructions: </p>
      <ul>{recipes.instructions.map((instr) => <li key={counter++}>{instr.instructions.type}{instr.instructions.text}</li>)}</ul>

      <p> </p>
      <p> Image: {<a href={recipes.image}>Billede</a>} </p>
      <p> </p>
    </div>
  );
};

export default function App() {
  return <FetchRecipes />;
}
