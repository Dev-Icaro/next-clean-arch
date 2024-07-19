import IUseCase from "../../../../common/interfaces/use-case.interface";
import CredentialsDTO from "../dtos/credentials.dto";
import { Authentication } from "../models/authentication";

export default interface IAuthenticateUserUseCase extends IUseCase<CredentialsDTO, Authentication> {
  
}
