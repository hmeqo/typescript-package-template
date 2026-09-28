/**
 * Exhaustiveness guard for discriminated unions: the `default` branch of a
 * `switch` fails to compile once a new variant is added.
 */
export function assertNever(value: never): never {
  throw new Error(`Unexpected value: ${String(value)}`)
}
