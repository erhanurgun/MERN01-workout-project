import mongoose from "mongoose";
import bcrypt from "bcrypt";
import validator from "validator";

const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
});

// static signup method
userSchema.statics.signup = async function (email, password) {
    // validation
    if (!email || !password) {
        throw Error("Lütfen tüm alanları doldurunuz!");
    }
    if (!validator.isEmail(email)) {
        throw Error("Geçerli bir e-posta adresi giriniz!");
    }
    if (!validator.isStrongPassword(password)) {
        throw Error("Şifreniz en az 8 karakterden oluşmalıdır!");
    }

    const exists = await this.findOne({email});

    if (exists) {
        throw Error("Bu e-posta adresi zaten kullanılıyor!");
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    return await this.create({email, password: hash});
};

// static login method
userSchema.statics.login = async function (email, password) {
    if (!email || !password) {
        throw Error("Lütfen tüm alanları doldurunuz!");
    }

    const user = await this.findOne({email});

    if (!user) {
        throw Error("Bu e-posta ile kayıtlı kullanıcı bulunamadı!");
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
        throw Error("Geçersiz şifre!");
    }

    return user;
};

const User = mongoose.model("User", userSchema);

export default User;