const defaultStore = {
    table: {
        columns: ['name', 'surname', 'age'],
        modalStatus: false
    },
    users: [
        {id: 1, name: 'Nazar', surname: 'Matsiaka', age: 21, email: 'nazarchukk06@gmail.com', gender: 'male', password: '123456789'},
        {id: 2, name: 'Vova', surname: 'Pastuch', age: 23, email: 'pastuh06@gmail.com', gender: 'male', password: '1234'},
        {id: 3, name: 'Yana', surname: 'Kravets', age: 16, email: 'kravets06@gmail.com', gender: 'female', password: '345sfdgf'}
    ],
    activeColumn: []
};

export default defaultStore;