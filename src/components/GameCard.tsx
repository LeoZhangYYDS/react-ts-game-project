import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import { Game } from "../entities/Game";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import resizeImage from "../services/image-url";
import { Link } from "react-router-dom";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  // const limit = 17;

  // const truncateText = (text: string, limit: number) => {
  //   if (text.length > limit) {
  //     return text.slice(0, limit) + "...";
  //   }
  //   return text;
  // };

  return (
    <Link to={"/games/" + game.slug}>
      <Card>
        <Image src={resizeImage(game.background_image)} />
        <CardBody>
          <HStack justifyContent="space-between" marginBottom={3}>
            <PlatformIconList
              platforms={game.parent_platforms?.map((p) => p.platform) || []}
            />
            <CriticScore score={game.metacritic} />
          </HStack>
          <Heading fontSize="2xl">{game.name}</Heading>
        </CardBody>
      </Card>
    </Link>
  );
};

export default GameCard;
