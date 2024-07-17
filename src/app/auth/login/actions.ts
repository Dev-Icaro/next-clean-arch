"use server";

import { container } from "@/common/di/inversify.config";
import { TYPES } from "@/common/di/types";
import IAuthUseCases from "@/modules/auth/domain/use-cases/IAuthUseCases";
import LoginSchema from "@/modules/auth/presentation/schemas/LoginSchema";
import * as z from "zod";

export const loginAction = async (data: z.infer<typeof LoginSchema>) => {
  const authUseCases = container.get<IAuthUseCases>(TYPES.IAuthUseCases);
  authUseCases.login(data);
};
