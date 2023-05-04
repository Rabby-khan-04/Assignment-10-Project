export const loadChefsDetails = async (id) => {
  const recipesRes = await fetch(
    `https://recipe-riot-server-rabby-khan-04.vercel.app/recipes/${id}`
  );
  const recipes = await recipesRes.json();

  const chefsRes = await fetch(
    `https://recipe-riot-server-rabby-khan-04.vercel.app/chefs/${id}`
  );
  const chef = await chefsRes.json();

  return { recipes, chef };
};
