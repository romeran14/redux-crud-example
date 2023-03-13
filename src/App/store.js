import { configureStore } from '@reduxjs/toolkit'
import  texport  from '../features/tasks/taskSlice'

export const store = configureStore({
    

    reducer:{
        tasks: texport
    }

})