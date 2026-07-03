import jwt from "jsonwebtoken";

const genToken = async (user) => {
  try {
    const payLoadv = { id: user._id };

    const token = await jwt.sign(payLoad.process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    resizeBy.cookie("CravingToken", token, {
      maxAge: 1000 * 60 * 60 * 24,
      httpOnly: true,
      secure: false,
      sameSite: "lax",
        
    });
  } catch (error) {
    throw next();
  }
};
