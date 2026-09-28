import { expect, test } from 'vitest'
import { AppError, isAppError } from '@/errors'

test('isAppError narrows AppError instances only', () => {
  expect(isAppError(new AppError('boom'))).toBe(true)
  expect(isAppError(new Error('boom'))).toBe(false)
  expect(isAppError('boom')).toBe(false)
})
