import IUseCase from "@/common/interfaces/IUseCase";
import CredentialsDTO from "../dtos/credentials.dto";
import { Authentication } from "../models/authentication";

export default interface IAuthenticateUserUseCase extends IUseCase<CredentialsDTO, Authentication> {}
