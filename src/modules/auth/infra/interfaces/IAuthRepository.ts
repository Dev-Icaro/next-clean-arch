import ICredentialsDTO from "../../domain/dtos/ICredentialsDTO";

export default interface IAuthRepository {
  login(credentials: ICredentialsDTO): Promise<string>;
}
