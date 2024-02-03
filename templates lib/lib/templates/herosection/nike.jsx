
import {Nav1 , Divbtn } from "../../navbars/nav1";
const Nike=()=>
{
    return(
       <>
        <Nav1/>
        <div className="flex flex-row justify-center  absolute top-[15%] m-5 ml-28">
           
            <ul className="space-y-12">
            <p className="font-extrabold text-[60px]">YOUR FEET DESERVE THE BEST</p>
            <p className="font-serif">YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
            <li className="flex flex-row  space-x-10">
               <Divbtn text={'Shop Now'} telStyle={'bg-red-500 w-24 pl-2 text-white cursor-pointer'}></Divbtn> 
               <Divbtn text={'Category'} telStyle={'bg-white border-[1px] border-black text-black cursor-pointer w-24 pl-2'}></Divbtn> 
            </li>
            <ul>
                <p>
                    Also Available onclic
                    <ul  className="flex flex-row space-x-5">
                        <img src="/public/flipkart.png"/>
                        <img src="/public\amazon.png"/>
                    </ul>
                </p>
            </ul>
            </ul>
            <img src="/public/shoe_image.png" className="w-1/2"/>
        </div>
        </>
    );
}
export default Nike;