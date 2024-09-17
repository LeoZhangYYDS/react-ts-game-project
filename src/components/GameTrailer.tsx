import useTrailers from "../hooks/useTrailers";

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data, error, isLoading } = useTrailers(gameId);
  console.log(data);
  if (isLoading) return null;
  if (error) throw error;
  const first = data?.results[1];
  return <video src={first?.data[480]} poster={first?.preview} controls />;
};

export default GameTrailer;
