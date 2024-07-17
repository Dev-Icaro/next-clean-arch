import { Container } from "inversify";
import { TYPES } from "./types";
import IAuthUseCases from "@/modules/auth/domain/use-cases/auth-use-cases.interface";
import AuthUseCasesImpl from "@/modules/auth/application/use-cases-impl/auth-use-cases";
import AuthRepositoryImpl from "@/modules/auth/infra/repositories/auth-repository";

const container = new Container();

container.bind<IAuthUseCases>(TYPES.IAuthUseCases).to(AuthUseCasesImpl);
container.bind<IAuthUseCases>(TYPES.IAuthRepository).to(AuthRepositoryImpl);

export { container };
