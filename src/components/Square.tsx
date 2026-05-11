import { useEffect } from "react"

export const Square = () => {
  useEffect(() => {
    console.log('Effect do Square Runnig')

    return () => {
      console.log('Running Clean Up')
    }
  })

  return (
    <div className="w-40 h-40 bg-red-400">

    </div>
  )
}