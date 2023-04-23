
import { Request, Response } from 'express';
import { ShowUserUseCase } from '../useCases/showUserUseCase';

class ShowUserController {

    async exec(_request: Request, response: Response) {
        try {
            const useCase = new ShowUserUseCase();
            const listUsers = await useCase.run();
            return response.status(200).json(listUsers)
        } catch (error: any) {
            return response.status(500).json(error)
        }
    }
}

export { ShowUserController }

