export interface User {
    id: number, 
    username: string, 
    email: string, 
    password: string, 
    isActive: boolean, 
    createAt: string, 
    updateAt: string
}

export interface UserCreateDTO {
    username: string, 
    email: string, 
    password: string, 
}