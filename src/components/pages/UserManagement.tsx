import { Wrap, WrapItem } from '@chakra-ui/react';
import { memo, VFC } from 'react';
import { UserCard } from '../organisms/layout/user/UserCard';

export const UserManagement: VFC = memo(() => (
  <Wrap p={{ base: 4, md: 10 }}>
    <WrapItem>
      <UserCard
        imageUrl="https://source.unsplash.com/ramdom"
        userName="じゃけぇ"
        fullName="Takumi Okada"
      />
    </WrapItem>
  </Wrap>
));
