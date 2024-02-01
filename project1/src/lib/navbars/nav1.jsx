
const Nav1=({event1,event2,event3,event4})=>{
    return(
        <nav className="flex flex-row h-20  w-[100vw]  pt-3 space-x-[13%] justify-center">
            
                <img src='./public/brand_logo.png' className="h-10 w-20 mr-20 " />
                <ul  className="flex  flex-row space-x-8 w-1/2 justify-center">
                    <p className="cursor-pointer" onclick={event1}>MENU</p>
                    <p className="cursor-pointer" onclick={event2}>LOCATION</p>
                    <p className="cursor-pointer" onclick={event3}>ABOUT</p>
                    <p className="cursor-pointer" onclick={event4}>CONTACT</p>
                </ul>
                <p className="border-2 w-14 h-7 bg-red-600 text-white pl-2 cursor-pointer">Login</p>
            
        </nav>
    );
}
const Btns=({name,telStyle})=>{
    return(
        <input type='button' value={name} className={telStyle}/>
    );
}
const Divbtn=({text,telStyle})=>{
    return(
        <div className={telStyle}>
            {text}
        </div>
    );
}
export  {Nav1,Btns,Divbtn};