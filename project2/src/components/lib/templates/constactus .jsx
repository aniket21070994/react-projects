import Details from "./details";

export default function Contactus1(){
    return(
        <div className="space-y-10 m-14">
            <p className="font-bold text-[40px]">
            CONTACT US
            </p>
            <p className="font-serif text-[20px] ">
            LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU! WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE, EMAIL, OR SOCIAL MEDIA. 
            </p>
           <div>
           <ul className="grid grid-cols-2 m-9">
          <li className=" w-[80%]">
                <Details/> 
          </li>
          
          <li>
             <img src="Service 24_7-pana 1.png" className="h-[100%]"/>
         </li>
   
</ul>
           </div>
            
            
            
            
            
            
            
            
            
        </div>
    );
}