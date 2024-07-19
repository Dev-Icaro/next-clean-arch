import CredentialsDTO from "../../domain/dtos/credentials.dto";
import { Authentication } from "../../domain/models/authentication";


export default interface IAuthPresenter {
  authenticate(credentials: CredentialsDTO): Promise<Authentication>;
}