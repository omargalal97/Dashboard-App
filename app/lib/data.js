// import { connect } from "mongoose";
import { User, Product } from "./models";
import { connectToDB } from "./utility";

export const fetchUsers = async (q, page) => {

    const regex = new RegExp(q, 'i');
    const ITEM_PER_PAGE = 2
  
  
    try {
      connectToDB()
    const users = await User.find({ username: { $regex: regex } }).limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE * (page-1))
      // const count = await User.find({ username: { $regex: regex } }).count();
      const count = await User.countDocuments({ username: { $regex: regex } });

    return  {users, count};
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
  };

  export const fetchProducts = async (q, page) => {
    console.log(q);
    const regex = new RegExp(q, "i");
  
    const ITEM_PER_PAGE = 2;
  
    try {
      connectToDB();
      const count = await Product.countDocuments({ title: { $regex: regex } });
      const products = await Product.find({ title: { $regex: regex } })
        .limit(ITEM_PER_PAGE)
        .skip(ITEM_PER_PAGE * (page - 1));
        return { count, products };
    } catch (err) {
      console.log(err);

      // throw new Error("Failed to fetch products!");
    }
  };