import Link from "next/link"
import { useRouter } from "next/router"

const style ={
    
    color: 'rgb(18, 197, 197)',
    textDecoration:'underline'
}

export const ActiveLink = ({text,href}) => {
   const {asPath} = useRouter();
 
  return (
   <Link  style={ asPath === href ? style :null}  href={href}>
    {text}
   </Link>
  )
}
