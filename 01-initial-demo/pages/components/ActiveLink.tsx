import Link from "next/link"
import { useRouter } from "next/router"
import { CSSProperties, FC } from "react";

const style:CSSProperties ={
    
    color: 'rgb(18, 197, 197)',
    textDecoration:'underline'
}
interface props{
  text:string;
  href:string;
}

export const ActiveLink:FC<props> = ({text,href}) => {
   const {asPath} = useRouter();
 
  return (
   <Link  style={ asPath === href ? style :{}}  href={href}>
    {text}
   </Link>
  )
}
