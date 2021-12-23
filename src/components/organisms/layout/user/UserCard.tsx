import { Box, Stack, Image, Text } from '@chakra-ui/react';
import { memo, ReactNode, VFC } from 'react';

type Props = {
  imageUrl: string;
  userName: string;
  fullName: string;
};

export const UserCard: VFC<Props> = memo((props) => {
  const { imageUrl, userName, fullName } = props;
  return (
    <Box
      w="260px"
      h="260px"
      bg="white"
      borderRadius="10px"
      shado="md"
      p={4}
      _hover={{ cursor: 'pointer', opacity: 0.8 }}
    >
      <Stack textAlign="center">
        <Image src={imageUrl} boxSize="160px" borderRadius="full" alt={userName} m="auto" />
        <Text fontSize="lg" fontWeight="bold">
          {userName}
        </Text>
        <Text fonsize="sm" color="gray">
          {fullName}
        </Text>
      </Stack>
    </Box>
  );
});
