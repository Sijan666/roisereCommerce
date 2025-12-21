

const Button = ({ btnText, className }) => {
    return (
       <button className={`flex items-center gap-3 font-bold text-sm text-gray-700 cursor-pointer group ${className}`}>

           <span className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-500 text-xl transition-all group-hover:bg-red-500 group-hover:text-white">
                +
            </span>
           {btnText}
        </button>
    )
}

export default Button