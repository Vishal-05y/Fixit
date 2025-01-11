const users=[
    {
        email:"abc@email.com",
        password:"123"
    },

    {
        email:"abcd@email.com",
        password:"123"
    },

    {
        email:"abcde@email.com",
        password:"123"
    }
]

export const getUserByEmail = (email) => {
    return users.find(user => user.email === email);
    return found;
}