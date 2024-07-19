import CredentialsDTO from "@/modules/auth/domain/dtos/credentials.dto";
import IAuthRepository from "../interfaces/auth-repository.interface";
import { Authentication } from "@/modules/auth/domain/models/authentication";
import { coreApi } from "@/common/api/core-api";
import { injectable } from "inversify";

export default
@injectable()
class AuthRepositoryImpl implements IAuthRepository {
  async login(credentials: CredentialsDTO): Promise<Authentication> {
    const { data, status } = await coreApi.post<Authentication>("/auth/login", credentials);

    if (status !== 200) {
      // TODO: Create an especific error to throw here
      // throw new OperationError()
    }

    // TODO: Create an mapper to return the data here.
    return data;
  }
}
