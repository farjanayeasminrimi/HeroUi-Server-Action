import { Button, Card, Link } from "@heroui/react";

const SingleCard = ({ card }) => {
  const { category, description, title } = card;
  return (
    <Card variant="primary" className="border border-amber-50">
      <Card.Header>
        <Card.Title>{title}</Card.Title>
        <Card.Description>{description}</Card.Description>
      </Card.Header>
    </Card>
  );
};

export default SingleCard;
