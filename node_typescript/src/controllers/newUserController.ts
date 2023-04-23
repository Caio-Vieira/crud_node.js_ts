import { Request, Response } from 'express';
import BadRequestError from '../modules/errors/badRequest';
import { NewUserUseCase } from '../useCases/newUserUseCase';

class NewUserController {

    async exec(request: Request, response: Response) {
        try {
            const newUser = request.body
            const useCase = new NewUserUseCase();
            console.log(newUser)

            if (!newUser.name || !newUser.email || !newUser.bank || !newUser.balance ) {
                console.log('Lack of parameters ')
                return response.status(400).send('Lack of parameters')
            }
            const listUsers = await useCase.run(newUser)
            return response.status(200).json(listUsers)
         } catch (error: any) {
            switch (error.constructor) {
                case BadRequestError:
                    return response.status(400).send('Existng data!');
                default:
                    return response.status(500).json(error)
            }
        }
    }
}

export { NewUserController }

