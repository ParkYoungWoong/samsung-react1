import { create } from 'zustand'
import { combine } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

interface User {
  emails: string[]
  displayName: string
  isValid: boolean
}

export const useUserStore = create(
  immer(
    combine(
      {
        user: {
          emails: ['test@test.com', 'test2@test.com'],
          displayName: 'test',
          isValid: false
        } as User
      },
      set => ({
        setEmail2: (email: string) => {
          set(state => {
            state.user.emails[1] = email
          })
        },
        setDisplayName: (name: string) => {
          set(state => {
            state.user.displayName = name
          })
        }
      })
    )
  )
)

// {
//   displayName: 'hello'
// }
