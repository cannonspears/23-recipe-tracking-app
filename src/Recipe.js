import React from "react";

function Recipe({ data, deleteRecipe }) {
  const { name, cuisine, photo, ingredients, preparation } = data;
  return (
    <tr>
      <td>
        <p>{name}</p>
      </td>
      <td>
        <p>{cuisine}</p>
      </td>
      <td>
        <img src={photo} />
      </td>
      <td className="content_td">
        <p>{ingredients}</p>
      </td>
      <td className="content_td">
        <p>{preparation}</p>
      </td>
      <td>
        <button name="delete" onClick={() => deleteRecipe(data)}>
          Delete
        </button>
      </td>
    </tr>
  );
}

export default Recipe;
