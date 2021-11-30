import { useMutation } from '@apollo/client';
import { AUTHORIZE } from '../graphql/mutations';
import { useApolloClient } from '@apollo/client';
import useAuthStorage from '../hooks/useAuthStorage';

const useSignIn = () => {
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();
  const [mutate, result] = useMutation(AUTHORIZE);

  const signIn = async ({ username, password }) => {
    const { data } = await mutate({ variables: { username, password } });
    await authStorage.setAccessToken(data.authorize.accessToken);
    apolloClient.resetStore();
    return data;
  };

  return [signIn, result];
};


export default useSignIn;