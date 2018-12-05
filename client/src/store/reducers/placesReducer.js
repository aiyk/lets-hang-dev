const initState = {
    places: [
        {
            id: 1,
            firstname: 'Ikechukwu',
            lastname: 'Ekwe',
            email: 'aiyk.ekwe@gmail.com',
            password: 'secret',
            phone: '08143496625',
            gender: 'Male',
            location: 'Lagos Nigeria',
            profession: 'Software Engineer',
            private: false,
            profileImg: '',
            quote: 'Perhaps the most important principle for the good algorithm designer is to refuse to be content. -Ullman, 1974'
        },
        {
            id: 2,
            firstname: 'Jonas',
            lastname: 'Daniels',
            email: 'jonas227e@gmail.com',
            phone: '08099887321',
            gender: 'Male',
            location: 'Berlin Germany',
            profession: 'Sales Executive',
            quote: 'Perhaps the most important principle for the good algorithm designer is to refuse to be content. -Ullman, 1974'
        },
        {
            id: 3,
            firstname: 'Sandra',
            lastname: 'Jones',
            email: 'sandystar@gmail.com',
            phone: '07021212332',
            gender: 'Female',
            location: 'Lagos - Nigeria',
            profession: 'Sales Executive',
            quote: 'Perhaps the most important principle for the good algorithm designer is to refuse to be content. -Ullman, 1974'
        }
    ]
}

const placesReducer = (state=initState, action) => {
    switch(action.type){
        case 'CREATE_PLACE':
        return state;
        default:
            return state;
    }
}

export default placesReducer