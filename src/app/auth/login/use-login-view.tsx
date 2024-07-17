import ICredentialsDTO from "@/modules/auth/domain/dtos/ICredentialsDTO";
import { loginAction } from "./actions";

export const useLoginView = () => {
  const onSignIn = (data: ICredentialsDTO) => {
    loginAction(data);
  };

  return {
    onSignIn,
  };
};
