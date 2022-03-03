import connection from "../db.js";
import bcrypt from "bcrypt";

export async function signUp(req, res) {
    const {name, email, password, confirmPassword} = req.body;

    if (confirmPassword !== password) { res.sendStatus(409) }

    try {
        const emailExists = await connection.query(`
            SELECT *
                FROM usuarios
                    WHERE email=$1
        `, [email]);
        
        if (emailExists.rows.length > 0) { return res.sendStatus(409) }

        const passwordHash = bcrypt.hashSync(password, 10);
        await connection.query(`
            INSERT INTO 
                usuarios (nome, email, senha) 
                    VALUES ($1, $2, $3)`
            , [name, email, passwordHash]);

        res.sendStatus(201);

    } catch (error) {
        res.sendStatus(500);
    }
}