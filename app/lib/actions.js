import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import { User, Product } from './models';
import { connectToDB } from './utility';
import bcrypt from "bcrypt"

export async function addUser(formData) {
  "use server";
  const { username, email, password, phone, address, isAdmin, isActive } = Object.fromEntries(formData);

  try {
    connectToDB();

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      phone,
      address,
      isAdmin,
      isActive,
    });

    await newUser.save();
  } catch (err) {
    console.log(err);
    throw new Error("Failed to create user!");
  }

  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
}

export const deleteUser = async (formData) => {
  "use server";

    const { id } = Object.fromEntries(formData);
  
    try {
      connectToDB();
      await User.findByIdAndDelete(id);
    } catch (err) {
      console.log(err);
      throw new Error("Failed to delete user!");
    }
  
    revalidatePath("/dashboard/products");
  };

  export const updateUser = async (formData) => {
  "use server";

    const { id, username, email, password, phone, address, isAdmin, isActive } =
      Object.fromEntries(formData);
  
    try {
      connectToDB();
  
      const updateFields = {
        username,
        email,
        password,
        phone,
        address,
        isAdmin,
        isActive,
      };
  
      Object.keys(updateFields).forEach(
        (key) =>
          (updateFields[key] === "" || undefined) && delete updateFields[key]
      );
  
      await User.findByIdAndUpdate(id, updateFields);
    } catch (err) {
      console.log(err);
      throw new Error("Failed to update user!");
    }
  
    revalidatePath("/dashboard/users");
    redirect("/dashboard/users");
  };

  export const deleteProduct = async (formData) => {
  "use server";

    
    const { id } = Object.fromEntries(formData);
  
    try {
      connectToDB();
      await Product.findByIdAndDelete(id);
    } catch (err) {
      console.log(err);
      throw new Error("Failed to delete product!");
    }
  
    revalidatePath("/dashboard/products");
  };

  export const updateProduct = async (formData) => {
  "use server";

    const { id, title, desc, price, stock, color, size } =
      Object.fromEntries(formData);
  
    try {
      connectToDB();
  
      const updateFields = {
        title,
        desc,
        price,
        stock,
        color,
        size,
      };
  
      Object.keys(updateFields).forEach(
        (key) =>
          (updateFields[key] === "" || undefined) && delete updateFields[key]
      );
  
      await Product.findByIdAndUpdate(id, updateFields);
    } catch (err) {
      console.log(err);
      throw new Error("Failed to update product!");
    }
  
    revalidatePath("/dashboard/products");
    redirect("/dashboard/products");
  };



  export const addProduct = async (formData) => {
  "use server";

    const { title, desc, price, stock, color, size } =
      Object.fromEntries(formData);
  
    try {
      connectToDB();
  
      const newProduct = new Product({
        title,
        desc,
        price,
        stock,
        color,
        size,
      });
  
      await newProduct.save();
    } catch (err) {
      console.log(err);
      throw new Error("Failed to create product!");
    }
  
    revalidatePath("/dashboard/products");
    redirect("/dashboard/products");
  };

  export const fetchUser = async (id) => {
    console.log(id);
    try {
      connectToDB();
      const user = await User.findById(id);
      return user;
    } catch (err) {
      console.log(err);
      throw new Error("Failed to fetch user!");
    }
  };

  export const fetchProduct = async (id) => {
    try {
      connectToDB();
      const product = await Product.findById(id);
      return product;
    } catch (err) {
      console.log(err);
      throw new Error("Failed to fetch product!");
    }
  };

 