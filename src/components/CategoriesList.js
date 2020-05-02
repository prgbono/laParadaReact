import React from 'react'
import { useMutation, useQuery } from "react-apollo";
import { UPDATE_CATEGORY, GET_CATEGORIES } from "../Queries";


export function CategoriesList() {
  const { loading, error, data } = useQuery(GET_CATEGORIES)
  const [updateCategory] = useMutation(UPDATE_CATEGORY);

  if (loading) return <div>Cargando categorías...</div>
  if (error) return <div>Error cargando categorías, `${error.message}`</div>

  console.log('CategoriesList Component - data: ',data)

  return data.getCategories.map(({ id, nombre }) => {
    let input;

    return (
      <div key= { id }>
        <p>{ nombre }</p>
        <form
          onSubmit = {e => {
            e.preventDefault();
            updateCategory({ variables: { id, nombre : input.value } });
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