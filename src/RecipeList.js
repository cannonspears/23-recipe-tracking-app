import React from "react";
import Recipe from "./Recipe";

function RecipeList({ allRecipes, deleteRecipe }) {
  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {allRecipes.map((oneRecipe, index) => (
            <Recipe key={index} data={oneRecipe} deleteRecipe={deleteRecipe} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
