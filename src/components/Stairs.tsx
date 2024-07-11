import { motion } from "framer-motion";



const stairAnimation={
    initial:{
        top:"0%",
    },
    animate:{
        top:"100%",
    },
    exit:{
        top:["100%","0%"],
    },
};
//calculate the reverse index fot stragger delay
const reverseIndex =(index: number)=>{
  
    const totalSteps=6;
    return totalSteps-index-1;
};
const Stairs = () => {
  return (
<>
{/* render 6 motion divs,each represending a step of stairs.Each div will have the same aniamtion defined
 by the stairsAnimation object.The delay for each div is calculated dinamically based in it's reveres index creating
 a straggered effect with decreasing  dealy for each subsequent step. */}
{[...Array(6)].map((_, index)=>{
return(
    <motion.div
    key={index}
    variants={stairAnimation}
    initial="initial"
    animate="animate"
    exit="exit"
    transition={{
        duration:0.4,
        ease:"easeInOut",
        delay:reverseIndex(index)*0.1,
    }}
    className="h-full w-full bg-white relative"
    />
);
})}


</>
  )
}

export default Stairs