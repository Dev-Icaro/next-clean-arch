import CredentialsDTO from "../../domain/dtos/credentials.dto";
import { Authentication } from "../../domain/models/authentication";

export default interface IAuthRepository {
  login(credentials: CredentialsDTO): Promise<Authentication>;
}
