import cardsData from "../data/cards.json";

export const getCards = async () => {
  return cardsData;
};
export const postCards = async (newCard) => {
  newCard.id = cardsData.length + 1;
  cardsData.push(newCard);
  return { success: true, message: "card added" };
  // console.log(cardsData);
};
