// @vitest-environment jsdom
import { describe, expect, it } from 'vitest'
import { getAll } from './applicationRepository'

describe('applicationRepository', () => {
  it('returns an empty array when localStorage is empty', () => {
    const applications = getAll()

    expect(applications).toEqual([])
  })
})