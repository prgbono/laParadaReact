import React from 'react'
import { useMutation, useQuery } from "react-apollo";
import { SET_CATEGORY, GET_CATEGORIES } from "../Queries";


export function CategoriesPage() {
  const { loading, error, data } = useQuery(GET_CATEGORIES)
  const [setCategory] = useMutation(SET_CATEGORY);

  if (loading) return <div>Cargando categorías...</div>
  if (error) return <div>Error cargando categorías, `${error.message}`</div>

  console.log('CategoriesPage - data: ',data)

  return data.getCategories.map(({ id, nombre }) => {
    let input;

    return (
      <div key= { id }>
        <p>{ nombre }</p>
        <form
          onSubmit = {e => {
            e.preventDefault();
            setCategory({ variables: { id:'ZvltwOmrYETF0JYLTJkC', nombre : input.value } });
            input.value = '';
          }}
        >
        <input 
          ref = {node => {
            input = node;
          }}
        />
        <button type = 'submit'>Actualizar categoría</button>  
        </form>
      </div>
    )
  })
}