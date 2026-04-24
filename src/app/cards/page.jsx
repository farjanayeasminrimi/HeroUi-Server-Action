import { getCards } from "@/lib/cards";

const Cards = async () => {
  const cards = await getCards();
  console.log(cards);
  return (
    <div className="container mx-auto my-9">
      <h1>All Cards: {cards.length}</h1>
    </div>
  );
};

export default Cards;
