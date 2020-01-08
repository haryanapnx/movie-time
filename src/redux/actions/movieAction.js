import * as constants from '../constants'

export function setLoading(bool){
    return{
        type:constants.MOVIES_LOADING,
        bool
    }
}

export const getMovies = async dispatch => {

   dispatch(setLoading(true))

   //some function
   
}
