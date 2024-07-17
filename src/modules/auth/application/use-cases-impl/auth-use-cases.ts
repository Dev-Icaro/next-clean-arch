import { inject, injectable } from "inversify";
import ICredentialsDTO from "../../domain/dtos/credentials.dto";
import IAuthUseCases from "../../domain/use-cases/auth-use-cases.interface";
import type IAuthRepository from "../../infra/interfaces/auth-repository.interface";
import LoginSchema from "../schemas/login-schema";
import { TYPES } from "@/common/di/types";

export default
@injectable()
class AuthUseCasesImpl implements IAuthUseCases {
  constructor(
    @inject(TYPES.IAuthRepository)
    private readonly authRepository: IAuthRepository
  ) {}

  public async login(credentials: ICredentialsDTO): Promise<string> {
    const validatedFields = LoginSchema.safeParse(credentials);
    if (!validatedFields.success) {
      throw new Error(validatedFields.error.message);
    }

    return this.authRepository.login(credentials);
  }
}
