const {generatethisContent} = require("../sevices/ai.service")

const getReview=async(req,res)=>{
  const code=req.body.code

  if(!code){
    return res.status(400).json({
      success:false,
      message:"Prompt is required"
    })
  }

  const response= await generatethisContent(code);
  console.log(response)
  res.send(response)
}

module.exports={getReview}