import { useQuery } from '@tanstack/react-query'

type ResponseValue = {
  message: string
  time: string
}

export default function DelayedData({ wait }: { wait: number }) {
  const { data, refetch } = useQuery<ResponseValue>({
    queryKey: ['delay', wait],
    queryFn: async () => {
      const res = await fetch(`https://api.heropy.dev/v0/delay?t=1000`)
      const data = await res.json()
      return data
    },
    staleTime: 1000 * 10, // 10초
    enabled: false
  })
  return (
    <>
      <button onClick={() => refetch()}>가져오기!</button>
      <div>{data?.time}</div>
    </>
  )
}
