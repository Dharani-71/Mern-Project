// import jwt from 'jsonwebtoken';
// //authnectication ->use enters 2nd time
// export default function auth(req,res,next){

//     const header = req.headers.authorization;
//     if(!header||!header.startsWith("Bearer "))//breaer->who carrier the tokens
//     {
//         return res.status(401).json({msg:"Authentication token is required"});
//     }

//     const token=header.split(" ")[1];//it split string into arrray and give the beraer as 0th index and token as 1st index
//     try {
//         const decoded = jwt.verify(token,process.env.SECRET_KEY)
//         req.userId=decoded.userId;
//         next();
//     } catch {
//         return res.status(401).json({msg:"invalid or expired token"});
        
//     }
// }

// import jwt from 'jsonwebtoken';
// //authentication ->use enters 2nd time
// export default function demo(req,res,next){

//     let header = Headers.authorization;
//     if(!header||!header.includes("Bearer "))//breaer->who carrier the tokens
//     {
//         return res.status(401).json({msg:"token missing"})
//     }

//     let token=header.split(" ")[1];//it split string into arrray and give the beraer as 0th index and token as 1st index
//     try {
//         let data  = jwt.verify(token,process.env.SECRET_KEY)
//         return res.status(200).json({msg:"token verifed ",data})
//         next()
//     } catch (error) {
//         return res.status(401).json({msg:"invalid token"})
        
//     }
// }
// demo()





import jwt from "jsonwebtoken";

export default function auth(req, res, next) {
  const header = req.headers.authorization;

  if (!header || !header.startsWith("Bearer ")) {
    return res.status(401).json({
      message: "Authentication token is required"
    });
  }

  const token = header.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.userId;
    next();
  } catch {
    return res.status(401).json({
      message: "Invalid or expired token"
    });
  }
}