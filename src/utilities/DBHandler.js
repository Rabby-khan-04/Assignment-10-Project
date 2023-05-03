import { toast } from "react-hot-toast";

export const addToDB = (id) => {
  const storedItem = getItemFromDB();
  const exist = storedItem.find((item) => item === id);
  if (exist) {
    toast.error("Already mark as favorite");
  } else {
    storedItem.push(id);
    toast.success("This recipe is in your favorites ");
  }

  localStorage.setItem("favourite-recipe", JSON.stringify(storedItem));
};

export const getItemFromDB = () => {
  const storedItem = JSON.parse(localStorage.getItem("favourite-recipe"));

  if (storedItem) {
    return storedItem;
  } else {
    return [];
  }
};
