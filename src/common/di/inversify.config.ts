import { Container, interfaces } from "inversify";
import { AuthModule } from "./modules/auth.module";

const container = new Container();

function initializeContainer() {
  container.load(AuthModule);
}

initializeContainer();

export function getInjection<T>(symbol: symbol) {
  return container.get<T>(symbol);
}

export function applyDependencies(
  func: Function,
  dependencies: interfaces.ServiceIdentifier<unknown>[] = []
) {
  const injections = dependencies.map((dependency) => container.get(dependency));
  return func.apply(func, injections);
}

export { container };
