import { expect, test } from 'vitest'
import { assertNever } from '@/utils'

test('assertNever throws for an unhandled variant', () => {
  expect(() => assertNever('unhandled' as never)).toThrow('Unexpected value: unhandled')
})
