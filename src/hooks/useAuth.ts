import axios from 'axios';
import { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';

export const useAuth = () => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const login = useCallback(
    (id: string) => {
      setLoading(true);
      axios
        .get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => {
          if (res.data) {
            history.push('home');
          } else {
            alert('ユーザーが見つかりません');
          }
        })
        .catch(() => {
          alert('ログインできません');
        })
        .finally(() => {
          setLoading(false);
        });
    },
    [history]
  );
  return { login, loading };
};
