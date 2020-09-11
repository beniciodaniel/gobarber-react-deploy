import { createContext } from 'react';

interface AuthContextData {
  name: string;
}

// Hack para tirar o erro do Typescript de inicializar um contexto vazio
const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export default AuthContext;
