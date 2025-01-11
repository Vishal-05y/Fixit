const users=[
    {
        username:"abc",
        password:"123"
    },

    {
        username:"abcd@email.com",
        password:"123"
    },

    {
        username:"abcde@email.com",
        password:"123"
    }
]

export const getUserByUsername = (username) => {
    return users.find(user => user.username === username);
    return found;
}