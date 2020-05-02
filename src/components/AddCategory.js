import React from 'react'
import { useMutation } from "react-apollo";
import { ADD_CATEGORY } from "../Queries";

export const AddCategory = () => {
  let input;
  const [addCategory, { data }] = useMutation(ADD_CATEGORY);

  return(
    <div>
      <form 
        onSubmit = {e => {
          e.preventDefault();
          addCategory({ variables: { nombre: input.value} });
          input.value = ''
        }}      
      >
      <input 
        ref = {node => { 
          input = node;
        }}
      />
      <button type='submit'>Añadir Categoría</button>
      </form>
    </div>
  )
}