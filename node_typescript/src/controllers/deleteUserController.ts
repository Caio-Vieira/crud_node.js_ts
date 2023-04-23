
import { Request, Response } from 'express';
import { DeleteUserUseCase } from '../useCases/deleteUserUseCase';

class DeleteUserController {

    async exec(request: Request, response: Response) {
        try {
            const userId = request.params.id;
            const useCase = new DeleteUserUseCase();
             await useCase.run(userId);
            return response.status(200).send('successfully deleted data!')
        } catch (error: any) {
            return response.status(500).json(error)
        }
    }
}

export { DeleteUserController }

