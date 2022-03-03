import connection from "../db.js";
import bcrypt from "bcrypt";
import { v4 as uuid } from "uuid";

export async function signIn(req, res) {
  const {email, password} = req.body;

    try {
        const registeredUser = await connection.query(`
            SELECT *
                FROM usuarios
                    WHERE email=$1
        `, [email]);

        if (registeredUser.rows.length === 0) { return res.sendStatus(404) }

        res.send(registeredUser.password)

    } catch (error) {
        res.sendStatus(500);
    }
/*
  try {
    const registeredUser = await db
      .collection("users")
      .findOne({ email: user.email });
    if (
      registeredUser &&
      bcrypt.compareSync(user.password, registeredUser.password)
    ) {
      const token = uuid();

      await db.collection("sessions").insertOne({
        userId: registeredUser._id,
        token,
      });

      const userInfoResponse = { token: token, user: registeredUser.name };
      res.send(userInfoResponse);
    } else {
      res.sendStatus(401);
    }
  } catch {
    res.sendStatus(500);
  }*/
}