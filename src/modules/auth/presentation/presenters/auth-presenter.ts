import AuthenticateUserUseCase from "../../application/use-cases-impl/authenticate-user-use-case";
import CredentialsDTO from "../../domain/dtos/credentials.dto";
import IAuthPresenter from "./auth-presenter.interface";

export const AuthPresenter = (authenticateUserUseCase: AuthenticateUserUseCase): IAuthPresenter => ({
  authenticate: async ({ password, email }: CredentialsDTO) => {
    const result = await authenticateUserUseCase.execute({
      email,
      password,
    });
    return result;
  },
});
