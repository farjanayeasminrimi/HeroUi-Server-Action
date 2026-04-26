"use server";
import { revalidatePath } from "next/cache";
import { postCards } from "./cards";
import { redirect } from "next/navigation";

export const action = async (formData) => {
  "use server";
  // const title = formData.get("title");
  // const description = formData.get("description");
  // const select = formData.get("select");
  // const author = formData.get("author");

  // const newCard = { title, description, select, author };

  const newCard = Object.fromEntries(formData.entries());
  const res = await postCards(newCard);
  if (res.success) {
    revalidatePath("/cards");
  } else {
    return "failed to add";
  }
};

export const addNewTask = async (formData) => {
  const newCard = Object.fromEntries(formData.entries());
  const res = await postCards(newCard);
  if (res.success) {
    revalidatePath("/cards");
    redirect("/cards");
  }
  return res;
};
