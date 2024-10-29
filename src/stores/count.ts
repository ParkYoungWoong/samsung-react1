import { create } from 'zustand'
import {
  combine,
  subscribeWithSelector,
  persist,
  devtools
} from 'zustand/middleware'

export const useCountStore = create(
  devtools(
    persist(
      subscribeWithSelector(
        combine(
          {
            count: 1,
            double: 2,
            min: 0,
            max: 99
          },
          set => ({
            increase: () => set(state => ({ count: state.count + 1 })),
            decrease: () => set(state => ({ count: state.count - 1 }))
          })
        )
      ),
      {
        name: 'count-store'
      }
    )
  )
)

useCountStore.subscribe(
  state => state.count, // 어떤 상태를 감시할 것이냐! (Selector)
  count => {
    useCountStore.setState({
      double: count * 2
    })
  } // 상태가 변경되었을 때 실행할 함수
)
