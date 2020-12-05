import { renderHook } from '@testing-library/react-hooks';
import { AuthProvider, useAuth } from '../../context/AuthContext';

describe('Auth hook', () => {
  it('should be able to sign in', () => {
    const { result } = renderHook(() => useAuth(), {
      wrapper: AuthProvider,
    });

    result.current.signIn({
      email: 'benicrazy@gmail.com',
      password: '123456',
    });

    expect(result.current.user.email).toEqual('benicrazy@gmail.com');
  });
});
