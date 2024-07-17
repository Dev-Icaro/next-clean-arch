import ICredentialsDTO from "../../domain/dtos/credentials.dto";

export default interface IAuthRepository {
  login(credentials: ICredentialsDTO): Promise<string>;
}
