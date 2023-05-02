export const loadChefsDetails = async (id) => {
  const recipesRes = await fetch(`http://localhost:3000/recipes/${id}`);
  const recipes = await recipesRes.json();

  const chefsRes = await fetch(`http://localhost:3000/chefs/${id}`);
  const chef = await chefsRes.json();

  return { recipes, chef };
};
