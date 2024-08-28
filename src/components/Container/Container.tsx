import { IContainerProps } from "@/interfaces/components.interface"

const Container = ({children}: IContainerProps) => {
  return (
    <div className="px-52">{children}</div>
  )
}

export default Container