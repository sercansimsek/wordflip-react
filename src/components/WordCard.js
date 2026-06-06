import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardText,
  CardTitle,
} from "reactstrap";

const WordCard = ({ word }) => {
  const { word: title, length, category, language } = word;

  return (
    <Card>
      <CardBody>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardText>{category}</CardText>
        <CardText>{length}</CardText>
      </CardBody>
      <CardFooter>
        <CardText>{language}</CardText>
      </CardFooter>
    </Card>
  );
};

export default WordCard;
