export class AppError extends Error {
  override readonly name: string = 'AppError'
}

export function isAppError(value: unknown): value is AppError {
  return value instanceof AppError
}
