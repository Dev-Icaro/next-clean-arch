import ICredentialsDTO from "../dtos/credentials.dto";

export default interface IAuthUseCases {
  login(credentials: ICredentialsDTO): Promise<string>;
}
