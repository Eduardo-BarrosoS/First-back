import { Request, Response } from "express"

const UserController = {

    async create( req: Request, res: Response ) {
        const body = req.body
        console.log(body)
        return res.send()
    }

}

export  { UserController }