const birthdayReducer = (state = [], action) => {
    switch(action.type) {
        case 'SET_BIRTHDAYS':
            return action.payload
    }
}