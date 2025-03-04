import React, {ReactNode} from 'react'

type Props = {
    children: ReactNode
}

const Title = ({children}: Props) => {
  return (
    <h1 className='w-fit text-center px-4 py-3 max-auto text-4xl mt-12 font-bold'>{children}</h1>
  )
}

export default Title
