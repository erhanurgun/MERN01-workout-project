import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

const requireAuth = async (req, res, next) => {
    // verify authentication
    const {authorization} = req.headers;

    if (!authorization) {
        return res.status(401).json({error: "Yetkilendirme için TOKEN'ınızı giriniz!"});
    }

    const token = authorization.split(" ")[1];

    try {
        const {_id} = jwt.verify(token, process.env.SECRET);
        req.user = await User.findOne({_id}).select("_id");
        if (!req.user) {
            return res.status(401).json({error: "Lütfen sorgu yapmak için önce giriş yapınız!!"});
        }
        next();
    } catch (error) {
        // console.log(error);
        res.status(401).json({error: "Yetkilendirme geçersiz!"});
    }
};

export default requireAuth;