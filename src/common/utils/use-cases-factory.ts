import IAuthUseCases from "@/modules/auth/domain/use-cases/IAuthUseCases";
import { container } from "../di/inversify.config";
import { TYPES } from "../di/types";

export default class UseCasesFactory {
  static getAuthUseCases(): IAuthUseCases {
    return container.get<IAuthUseCases>(TYPES.IAuthUseCases);
  }
}
