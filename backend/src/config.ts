import assert from 'node:assert';

export function getEnvOrFail<T = string>(variable: string, converter?: (value: string) => T): T {
  const value = process.env[variable];
  assert(value, `env variable ${variable} must be defined`);

  if (converter) {
    return converter(value);
  }

  return value as T;
}
