import { interfaces } from "inversify";
import { container } from "@/common/di/inversify.config";

/** @scope src/ioc */
export function applyDependencies(
  func: Function,
  dependencies: interfaces.ServiceIdentifier<unknown>[] = []
) {
  const injections = dependencies.map((dependency) => container.get(dependency));
  return func.apply(func, injections);
}
