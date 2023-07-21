import { pathHome, pathMenu } from '@/app/config/paths'

describe('test paths', () => {
  it('Path home', () => {
    expect(pathHome()).toBe('/')
  })

  it('Path menu', () => {
    expect(pathMenu()).toBe('/menu')
  })
})
