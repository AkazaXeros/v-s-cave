import { Badge } from '@chakra-ui/react';

type Props = {
  score: number;
};

const CriticScore = ({ score }: Props) => {
  const color = score > 75 ? 'green' : score > 60 ? 'yellow' : 'red';

  return (
    <Badge
      fontSize="14px"
      borderRadius={4}
      paddingX="8px"
      variant="outline"
      colorScheme={color}
    >
      {score}
    </Badge>
  );
};
export default CriticScore;
