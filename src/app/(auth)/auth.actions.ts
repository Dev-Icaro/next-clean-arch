"use server";

import { getInjection } from "@/common/di/inversify.config";
import { TYPES } from "@/common/di/types";
import IAuthPresenter from "@/modules/auth/presentation/presenters/auth-presenter.interface";

const { authenticate } = getInjection<IAuthPresenter>(TYPES.IAuthPresenter);

export { authenticate };
