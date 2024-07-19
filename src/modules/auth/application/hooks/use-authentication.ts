import { signIn, signOut } from "@/auth";
import CredentialsDTO from "../../domain/dtos/credentials.dto";

type UseAuthentication = {
  logIn: (input: CredentialsDTO) => Promise<{ ok: boolean }>;
  logOut: () => void;
};

export const useAuthentication = (): UseAuthentication => {
  const logIn = async ({ email, password }: CredentialsDTO) => {
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (res) {
      return { ok: true };
    } else {
      return { ok: false };
    }
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
