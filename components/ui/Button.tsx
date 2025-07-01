"use client";
import React, { useRef, useEffect, useState } from "react";

const Button = ({title, icon, classNameButton, onClick}:{title?:string, icon?:React.ReactNode,classNameButton? : string, onClick? : () => void}) => {
    const [selected, setSelected] = useState(false);
  
    return (
    <div>
        <button 
        onClick={onClick}
        className="transform transition-transform duration-300 hover:scale-105 relative w-full inline-flex h-12 overflow-hidden rounded-sm p-[1.5px] focus:outline-none md:w-60 ">
            <span className={`absolute inset-[-1000%] animate-[spin_2s_linear_infinite] ${classNameButton}`} />
            <span className=" inline-flex h-full w-full cursor-pointer items-center justify-center rounded-sm bg-slate-950 px-3 py-1 text-base font-medium text-white backdrop-blur-3xl gap-2">
                {title}
                {icon}
            </span>
        </button>
    </div>
  )
}

export default Button