import React, { useState } from "react";

function RecipeCreate({ addRecipe }) {
  let initialFormData = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  function handleInput(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    addRecipe(formData);
    setFormData({ ...initialFormData });
  }

  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleInput}
              />
            </td>
            <td>
              <input
                type="text"
                id="cuisine"
                name="cuisine"
                placeholder="Cuisine"
                value={formData.cuisine}
                onChange={handleInput}
              />
            </td>
            <td>
              <input
                type="text"
                id="photo"
                name="photo"
                placeholder="Photo"
                value={formData.photo}
                onChange={handleInput}
              />
            </td>
            <td>
              <textarea
                id="ingredients"
                name="ingredients"
                placeholder="Ingredients"
                rows="2"
                cols="120"
                value={formData.ingredients}
                onChange={handleInput}
              />
            </td>
            <td>
              <textarea
                id="preparation"
                name="preparation"
                placeholder="Preparation"
                rows="2"
                cols="120"
                value={formData.preparation}
                onChange={handleInput}
              />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
