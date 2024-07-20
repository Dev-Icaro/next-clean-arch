import { ContainerModule, interfaces } from "inversify";
import { TYPES } from "../types";

import IAuthRepository from "@/modules/auth/domain/repositories/auth-repository.interface";
import AuthRepositoryImpl from "@/modules/auth/data/repositories/auth-repository";
import IAuthenticateUserUseCase from "@/modules/auth/domain/use-cases/auth-use-cases.interface";
import AuthenticateUserUseCase from "@/modules/auth/application/use-cases/authenticate-user-use-case";

const initializeModule = (bind: interfaces.Bind) => {
  bind<IAuthRepository>(TYPES.IAuthRepository).to(AuthRepositoryImpl).inSingletonScope();

  bind<IAuthenticateUserUseCase>(TYPES.IAuthenticateUserUseCase)
    .to(AuthenticateUserUseCase)
    .inSingletonScope();
};

export const AuthModule = new ContainerModule(initializeModule);
