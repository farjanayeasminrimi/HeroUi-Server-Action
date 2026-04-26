import AddTask from "@/components/AddTask/AddTask";
import SingleCard from "@/components/Card/Card";
import { action } from "@/lib/action";
import { getCards } from "@/lib/cards";
import { Button } from "@heroui/react";
import Link from "next/link";

const Cards = async () => {
  const cards = await getCards();
  console.log(cards);
  return (
    <div className="container mx-auto my-9">
      <h1>All Cards: {cards.length}</h1>
      <AddTask action={action}></AddTask>
      <Link className="ml-2" href="/cards/addCard">
        <Button variant="secondary">Add to Card</Button>
      </Link>
      <div className="my-9 grid grid-cols-1 md:grid-cols-3 gap-4">
        {cards.map((card) => (
          <SingleCard key={card.id} card={card}></SingleCard>
        ))}
      </div>
    </div>
  );
};

export default Cards;
