import ICredentialsDTO from "../dtos/ICredentialsDTO";

export default interface IAuthUseCases {
  login(credentials: ICredentialsDTO): Promise<string>;
}
