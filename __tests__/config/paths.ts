import {
  pathHome,
  pathLobby,
  pathLogin,
  pathMenu,
  pathRegister,
} from '@/app/config/paths'

describe('test paths', () => {
  it('Path home', () => {
    expect(pathHome()).toBe('/')
  })

  it('Path menu', () => {
    expect(pathMenu()).toBe('/menu')
  })

  it('Path lobby', () => {
    expect(pathLobby()).toBe('/lobby')
  })

  it('Path login', () => {
    expect(pathLogin()).toBe('/login')
  })

  it('Path Register', () => {
    expect(pathRegister()).toBe('/register')
  })
})
