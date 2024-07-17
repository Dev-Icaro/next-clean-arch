import { injectable } from "inversify";
import ICredentialsDTO from "../../domain/dtos/ICredentialsDTO";
import IAuthRepository from "../interfaces/IAuthRepository";
import { coreApi } from "@/common/api/core-api";

export default
@injectable()
class AuthRepositoryImpl implements IAuthRepository {
  async login(credentials: ICredentialsDTO): Promise<string> {
    const response = await coreApi.post<{ accessToken: string }>(
      "/auth/login",
      credentials
    );
    return response.data.accessToken;
  }
}
