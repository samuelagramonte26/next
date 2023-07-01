import Link from "next/link"
import { useRouter } from "next/router"
import { CSSProperties } from "react";

const style:CSSProperties ={
    
    color: 'rgb(18, 197, 197)',
    textDecoration:'underline'
}
interface props{
  text:string;
  href:string;
}

 const ActiveLink = ({text,href}: props) => {
   const {asPath} = useRouter();
 
  return (
   <Link  style={ asPath === href ? style :{}}  href={href}>
    {text}
   </Link>
  )
}
export default ActiveLink;