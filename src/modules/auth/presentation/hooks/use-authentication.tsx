import { signOut } from "@/auth";
import CredentialsDTO from "../../domain/dtos/credentials.dto";
import { login as loginAction } from "../actions/login";

type UseAuthentication = {
  logIn: (input: CredentialsDTO) => Promise<void>;
  logOut: () => void;
};

export const useAuthentication = (): UseAuthentication => {
  const logIn = async ({ email, password }: CredentialsDTO) => {
    await loginAction({ email, password });
  };

  const logOut = async () => {
    return signOut({
      redirect: false,
    });
  };

  return {
    logIn,
    logOut,
  };
};
