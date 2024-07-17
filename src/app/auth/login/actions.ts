"use server";

import { container } from "@/common/di/inversify.config";
import { TYPES } from "@/common/di/types";
import IAuthUseCases from "@/modules/auth/domain/use-cases/auth-use-cases.interface";
import LoginSchema from "@/modules/auth/application/schemas/login-schema";
import * as z from "zod";

export const loginAction = async (data: z.infer<typeof LoginSchema>) => {
  const authUseCases = container.get<IAuthUseCases>(TYPES.IAuthUseCases);
  authUseCases.login(data);
};
