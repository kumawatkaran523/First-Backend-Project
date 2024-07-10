// & below is higher order function ,higher order function are
// & those function which can accept fucntion as parameter and can return too.

const asyncHandler= (requestHandler)=>{
    return (req,res,next)=>{
        Promise
        .resolve(requestHandler(req,res,next))
        .catch((err)=>next(err))
    }
}

export {asyncHandler}



// const asyncHandler = (func)=> {()=>{}}
// const asyncHandler =(func)=>async ()=>{}


// const asyncHandler=(fn)=> async (req,res,next)=>{
//     try {
//        await fn(req,res,next) 
//     } catch (error) {
//         res.status(error.code || 400).json({
//             success:false,
//             message:error.message
//         })
//     }
// }

