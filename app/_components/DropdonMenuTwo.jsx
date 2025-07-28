export default function DropDownMenuTwo({ extraDesign = "", items = [], itemBorders = "" }){
    return(
        <ul className={`opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-400 z-10 absolute bg-[#FFF] p-4 border shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] rounded-xl border-[rgba(0,0,0,0.10)] top-full ${extraDesign}`}>

            {
                items.map((item) => (
                    <li className={`text-[#4B5563] text-sm font-medium flex items-center py-3 px-2 cursor-pointer hover:bg-gray-100 ${itemBorders}`}>
                        <p className="text-[#111827] text-sm font-medium">{item}</p>
                    </li>
                ))
            }

        </ul>
    );
}