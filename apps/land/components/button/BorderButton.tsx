import React from 'react'

const BorderButton = ({ buttonText = "Learn More", bgColor = "transparent", borderColor = "white", textColor = "white", sidePadding = "12" }: { buttonText?: string, bgColor?: string, borderColor?: string, textColor?: string, sidePadding?: string }) => {
  return (
    <span className={`relative px-${sidePadding} py-4 overflow-hidden font-medium bg-${bgColor} group`}>
        <span className={`absolute top-0 left-0 w-11/12 h-0 transition-all duration-200 border-t-[1px] border-${borderColor} group-hover:w-full ease`}></span>
        <span className={`absolute bottom-0 right-0 w-0 h-4/5 w-0 transition-all duration-200 border-r-[1px] border-${borderColor} group-hover:mb-2.5 ease`}></span>
        <span className={`absolute bottom-0 right-0 w-11/12 h-0 transition-all duration-200 border-b-[1px] border-${borderColor} group-hover:mr-3.5 ease`}></span>
        <span className={`absolute top-0 left-0 w-0 h-4/5 w-0 transition-all duration-200 border-l-[1px] border-${borderColor} group-hover:h-full ease`}></span>
        <span className={`relative transition-colors duration-300 delay-200 text-${textColor} ease`}>{buttonText}</span>
    </span>
  )
}

export default BorderButton