import { injectable } from "inversify";
import ICredentialsDTO from "../../domain/dtos/credentials.dto";
import IAuthRepository from "../interfaces/auth-repository.interface";
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
