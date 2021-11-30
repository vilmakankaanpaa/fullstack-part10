import { useMutation } from '@apollo/client';
import { AUTHORIZE } from '../graphql/mutations';

const useSignIn = () => {
  const [mutate, result] = useMutation(AUTHORIZE);

  const signIn = async ({ username, password }) => {
    return await mutate({ variables: { username, password } });
  };

  result ? console.log('result',result) : null;

  return [signIn, result];
};


export default useSignIn;