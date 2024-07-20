import CredentialsDTO from "../dtos/credentials.dto";
import { Authentication } from "../models/authentication";

export default interface IAuthRepository {
  login(credentials: CredentialsDTO): Promise<Authentication>;
}
