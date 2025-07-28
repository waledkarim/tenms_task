export default function DropDownMenu({ extraDesign = "", items = [] }){
    return(
        <ul className={`opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-400 z-10 absolute bg-[#FFF] p-4 border shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] rounded-xl border-[rgba(0,0,0,0.10)] top-full ${extraDesign}`}>
            {
                items.map((item) => (
                    <div className="flex items-center cursor-pointer hover:bg-gray-100">
                        <span className="mr-4">{item.icon}</span>
                        <li className="text-[#4B5563] text-sm font-medium flex items-center py-3 px-2">{item.name}</li>
                    </div>
                ))
            }
        </ul>
    );
}