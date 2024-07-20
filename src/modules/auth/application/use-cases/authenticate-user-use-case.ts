import { TYPES } from "@/common/di/types";
import { injectable, inject } from "inversify";
import CredentialsDTO from "../../domain/dtos/credentials.dto";
import { Authentication } from "../../domain/models/authentication";
import IAuthenticateUserUseCase from "../../domain/use-cases/auth-use-cases.interface";
import type IAuthRepository from "@/modules/auth/domain/repositories/auth-repository.interface";

@injectable()
export default class AuthenticateUserUseCase implements IAuthenticateUserUseCase {
  constructor(@inject(TYPES.IAuthRepository) private readonly _authRepository: IAuthRepository) {}

  public async execute(credentials: CredentialsDTO): Promise<Authentication> {
    const authentication = await this._authRepository.login(credentials);

    if (!authentication) {
      // TODO Implement a better error handling
      throw new Error();
    }

    // TODO: Mapper of resto to DTO
    return authentication;
  }
}
