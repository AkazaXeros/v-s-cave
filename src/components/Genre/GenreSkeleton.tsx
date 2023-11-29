import { HStack, Skeleton, SkeletonText } from '@chakra-ui/react';

const GenresSkeleton = () => {
  return (
    <HStack paddingY="5px">
      <Skeleton boxSize="32px" borderRadius={8} />
      <SkeletonText width="100px" noOfLines={1} />
    </HStack>
  );
};
export default GenresSkeleton;
