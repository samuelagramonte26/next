import { FC, ReactNode } from "react"

 const DartLayout:FC<{ children: React.ReactNode[] | ReactNode}> = ({children}) => {
  return (
    <div style={{
        padding:'10px',
        backgroundColor:'rgba(1,0,0,0.3)',
        borderRadius:'5px',
        color:'green'
    }}>
        { children }
    </div>
  )
}
export default DartLayout