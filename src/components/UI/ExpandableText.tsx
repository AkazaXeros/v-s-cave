import { Text, Button } from '@chakra-ui/react';
import { useState } from 'react';

type Props = {
  children: string;
};

const ExpandableText = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const limit = 300;

  if (!children) return null;
  if (children.length <= limit) return <Text>{children}</Text>;

  const summary = expanded ? children : children.substring(0, limit) + '...';

  return (
    <Text>
      {summary}
      <Button
        size={'xs'}
        fontWeight={'bold'}
        colorScheme="yellow"
        onClick={() => setExpanded(!expanded)}
        marginStart={2}
      >
        {expanded ? 'Show Less' : 'Read More'}
      </Button>
    </Text>
  );
};

export default ExpandableText;
