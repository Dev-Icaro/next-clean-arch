import { ContainerModule, interfaces } from "inversify";
import { TYPES } from "../types";
import { applyDependencies } from "@/common/utils/ioc.utils";
import { AuthPresenter } from "@/modules/auth/presentation/presenters/auth-presenter";

import IAuthRepository from "@/modules/auth/infra/interfaces/auth-repository.interface";
import AuthRepositoryImpl from "@/modules/auth/infra/repositories/auth-repository";
import IAuthenticateUserUseCase from "@/modules/auth/domain/use-cases/auth-use-cases.interface";
import AuthenticateUserUseCase from "@/modules/auth/application/use-cases-impl/authenticate-user-use-case";
import IAuthPresenter from "@/modules/auth/presentation/presenters/auth-presenter.interface";

const initializeModule = (bind: interfaces.Bind) => {
  bind<IAuthRepository>(TYPES.IAuthRepository).toConstantValue(applyDependencies(AuthRepositoryImpl, []));

  bind<IAuthenticateUserUseCase>(TYPES.IAuthenticateUserUseCase).toConstantValue(
    applyDependencies(AuthenticateUserUseCase, [TYPES.IAuthRepository])
  );

  bind<IAuthPresenter>(TYPES.IAuthPresenter).toConstantValue(
    applyDependencies(AuthPresenter, [TYPES.IAuthenticateUserUseCase])
  );
};

/** @scope src/ioc  */
export const AuthModule = new ContainerModule(initializeModule);
