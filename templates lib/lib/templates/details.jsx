const Details=()=>{

    return(

        
<div className="grid grid-cols-2   grid-rows-6 gap-11 w-[100%] h-[100%] ml-[10%]">
    <div className="bg-black w-[100%] pt-3 pl-1 h-12 space-x-1 flex text-[13px] cursor-pointer ">
        <img src='ic_outline-message.png' className="h-8"/>
       <span  className="text-white">
        VIA SUPPORT CHAT
       </span> 
       
    </div>

    <div className="bg-black w-[100%] pt-3 pl-7 space-x-1 h-12 cursor-pointer flex text-[13px] ">
      <img src='ic_baseline-phone.png' className="h-6"/>
     <span  className="text-white">
      VIA CALL
     </span> 
     
  </div>

                  
    <div className="col-span-2">
          
    <div className="border-2 border-black w-[100%] pt-3 pl-[30%] h-12 space-x-1 flex cursor-pointer  text-[13px] ">
     <img src='ic_outline-message (1).png' className="h-5"/>
    <span  className="">
     VIA EMAIL FORM
    </span> 
    
 </div>

    </div>
    <div className="col-span-2 row-start-3 ">
       <p className="relative top-3 left-7 bg-white pl-1 w-14">Name</p>
        <input type='text' className="border-2 h-[100%] font-serif text-lg w-[100%]"/> 
                       
    </div>
    <div className="col-span-2 row-start-4">

    <p className="relative top-3 left-7 bg-white pl-1 w-14">Email</p>
    <input type='email' className="border-2 h-[100%] font-serif text-lg w-[100%]"/> 

    </div>
    <div className="col-span-2 row-start-5">
    <p className="relative top-3 left-7 bg-white pl-1 w-14">Text</p>
    <input type='text' className="border-2 h-[100%] font-serif text-lg w-[100%]"/> 
    </div>
    <div className="col-start-2 row-start-6">
    
      <button  className="bg-black text-white w-[100%] h-[100%]">
        SUBMIT
      </button>
    </div>
</div>
    
    );
}
export default Details;