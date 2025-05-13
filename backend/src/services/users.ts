import { LoginDto, RegisterDto } from "../../dto/user";
import User from "../models/user";
import { compare, hash } from "bcrypt";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";


export const userLogin = async (user: LoginDto) => {
  try {
    const { password, username } = user;
    if(!password || !username) throw new Error("password and username is required!");
    const userFromDatabase = await User.findOne({
      username: username,
    }).lean();
    if (!userFromDatabase) throw new Error("user not found");
    const match = await compare(password, userFromDatabase.password);
    if (!match) throw new Error("wrong password");
    // gen token
    const token = await jwt.sign(
      {
        user_id: userFromDatabase._id,
        username: userFromDatabase.username,
      },
      process.env.JWT_SECRET!,
      {
        expiresIn: "100m",
      }
    );
    return { ...userFromDatabase, token, password: "*******" };
  } catch (err) {
    throw err;
  }
};

export const createNewUser = async (user: RegisterDto) => {
  try {
    if (!user.username) {
      throw new Error("username is required!");
    }
    console.log({ user });
    if (!user.password)
      throw new Error("Missing user data, [password] is require");
    const encPass = await hash(user.password, 10);
    user.password = encPass;
    const newUser = new User(user);
    return await newUser.save();
  } catch (err) {
    console.log(err);
    throw new Error("Can't create new user");
  }
};

export const profileService = async (user: { user_id: string }) => {
  try {
    if (!user) {
      throw new Error("user is required!");
    }
    const findById = await User.findOne({ _id: user.user_id });
    if (!findById) throw new Error("user not found!");
    return findById;
  } catch (err: any) {
    console.log(err);
    throw new Error(`${err.message}`);
  }
};

export const getAllUsersService = async () => {
  try {
    const allUsers = await User.find();
    return allUsers;
  } catch (err: any) {
    console.log(err);
    throw new Error(`${err.message}`);
  }
};

export const initDatabase = async () => {
  try {
    const hashedPassword = await bcrypt.hash("5050", 10);
    const adminUser = new User({
      username: "meny miler",
      password: hashedPassword,
    });
    await adminUser.save();
  } catch (err) {
    console.log(
      "can't create new admin user, maybe it already exist in the database",
      err
    );
  }
};
