interface IUserModel{
    id: number; 
    name: string;
    email: string;
    bank: string;
    balance: number;
}

export const users: Array<IUserModel> = [
    {
        id: 1,
        name: "luiz",
        email: "luiz@hotmai.com",
        bank: "Dev S.A",
        balance:2000
    }
]