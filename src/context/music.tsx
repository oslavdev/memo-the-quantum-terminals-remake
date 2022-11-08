import * as React from 'react'

/* Declare Context */
const MusicManagerContextState = React.createContext(null)
const MusicManagerContextDispatch = React.createContext(null)

/* Music themes */
type themeTypes = {
    MENU_THEME: string,
    MEMO_THEME: string,
    MEMO_GAMEPLAY_THEME: string,
    MEMO_TITLES_THEME:string,
}
const themes: themeTypes = {
    MENU_THEME: 'MENU_THEME',
    MEMO_THEME: 'MEMO_THEME',
    MEMO_GAMEPLAY_THEME: 'MEMO_GAMEPLAY_THEME',
    MEMO_TITLES_THEME:'MEMO_TITLES_THEME'
}

/* Actions */
export const MENU_THEME = themes.MENU_THEME
export const MEMO_THEME = themes.MEMO_THEME
export const MEMO_GAMEPLAY_THEME = themes. MEMO_GAMEPLAY_THEME
export const MEMO_TITLES_THEME = themes.MEMO_TITLES_THEME
export const STOP_ALL_MUSIC = "STOP"

type State = {
  play: boolean
  theme: string
  src: string
}
type Action = State & { type: string }
type MusicManagerProviderProps = { children: React.ReactNode }

/* Reducer */
function musicManagerReducer(state: State | null, action: Action) {
  switch (action.type) {
    case MENU_THEME: {
      return {
        play: true,
        theme:MENU_THEME,
        src: "/public/music/intro.mp3"
      }
    }
    case MEMO_THEME: {
        return {
          play: true,
          theme:MEMO_THEME,
          src: "/public/music/intro.mp3"
        }
      }
      case MEMO_GAMEPLAY_THEME: {
        return {
          play: true,
          theme:MEMO_GAMEPLAY_THEME,
          src: "/public/music/intro.mp3"
        }
      }
      case MEMO_TITLES_THEME: {
        return {
          play: true,
          theme:MENU_THEME,
          src: "/public/music/intro.mp3"
        }
      }

    case STOP_ALL_MUSIC: {
        return {
          play: false,
          theme:null,
          src: "/public/music/intro.mp3"
        }
      }
   
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

/* Provider */
function MusicManagerContextProvider({ children }: MusicManagerProviderProps) {
  const [state, dispatch] = React.useReducer(musicManagerReducer, null)
  return (
    <MusicManagerContextState.Provider value={state}>
      <MusicManagerContextDispatch.Provider value={dispatch}>
        {children}
      </MusicManagerContextDispatch.Provider>
    </MusicManagerContextState.Provider>
  )
}

/* Custom hooks */
function useMusicManagerState() {
  const context = React.useContext(MusicManagerContextState)
  if (context === undefined) {
    throw new Error('useCountState must be used within a CountProvider')
  }
  return context
}

function useMusicManagerDispatch() {
  const context = React.useContext(MusicManagerContextDispatch)
  if (context === undefined) {
    throw new Error('useCountDispatch must be used within a CountProvider')
  }
  return context
}

export { MusicManagerContextProvider, useMusicManagerState, useMusicManagerDispatch }
