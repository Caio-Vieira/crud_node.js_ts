
import { Request, Response } from 'express';
import { UpdateUserUseCase } from '../useCases/updateUserUserCase';

class UpdateUserController {

    async exec(request: Request, response: Response) {
        try {
            const {body, params} = request
            const useCase = new UpdateUserUseCase();
             await useCase.run({ ...body, id: params.id});
            return response.status(200).send('Data updated successfully!')
        } catch (error: any) {
            return response.status(500).json(error)
        }
    }
}

export { UpdateUserController }