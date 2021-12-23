/* eslint-disable react-hooks/exhaustive-deps */
import { Center, Spinner, Wrap, WrapItem } from '@chakra-ui/react';
import { memo, useEffect, VFC } from 'react';
import { UserCard } from '../organisms/layout/user/UserCard';
import { useAllUsers } from '../../hooks/useAllUsers';
import { User } from '../../types/user';

export const UserManagement: VFC = memo(() => {
  const { getUsers, users, loading } = useAllUsers();
  useEffect(() => getUsers(), []);
  return (
    <>
      {loading ? (
        <Center h="100vh">
          <Spinner />
        </Center>
      ) : (
        <Wrap p={{ base: 4, md: 10 }} justify="center">
          {users?.map((user: User) => (
            <WrapItem key={user.id}>
              <UserCard
                imageUrl="https://source.unsplash.com/ramdom"
                userName={user.username}
                fullName={user.name}
              />
            </WrapItem>
          ))}
        </Wrap>
      )}
    </>
  );
});
