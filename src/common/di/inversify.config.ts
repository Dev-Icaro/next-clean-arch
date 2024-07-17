import { Container } from "inversify";
import { TYPES } from "./types";
import IAuthUseCases from "@/modules/auth/domain/use-cases/IAuthUseCases";
import AuthUseCasesImpl from "@/modules/auth/application/use-cases-impl/AuthUseCasesImpl";
import AuthRepositoryImpl from "@/modules/auth/infra/repositories/AuthRepositoryImpl";

const container = new Container();

container.bind<IAuthUseCases>(TYPES.IAuthUseCases).to(AuthUseCasesImpl);
container.bind<IAuthUseCases>(TYPES.IAuthRepository).to(AuthRepositoryImpl);

export { container };
