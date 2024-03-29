//slice in Redux is imagine remix the whole state of data

//Redux like the whole state
//slice is just one smaller state

//we're trying to save data in the global state of the whole website
//all that is just data shared across all your web pages 

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cars: ["Model S", "Model 3", "Model X", "Model Y"]
}

//piece of car
const carSlice = createSlice({
    name: "car",
    initialState,
    reducers: {}// functions use to manipulate the state
})

export const selectCars = state => state.car.cars
export default carSlice.reducer

//state.car.cars: car(name:'car') / cars(initialState)
//selectCars map with ["Model S", "Model 3", "Model X", "Model Y"]