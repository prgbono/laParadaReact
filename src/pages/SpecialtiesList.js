import React from 'react'
import { useMutation, useQuery } from "react-apollo";
import { SET_SPECIALTY, GET_SPECIALTIES } from '../Queries';


export function SpecialtiesList() {
  const { loading, error, data } = useQuery(GET_SPECIALTIES)
  const [setSpecialty] = useMutation(SET_SPECIALTY);

  if (loading) return <div>Cargando especialidades...</div>
  if (error) return <div>Error cargando especialidades, `${error.message}`</div>

  console.log('SpecialtiesList Component - data: ',data)

  return data.getSpecialties.map(({ id, nombre }) => {
    let input;

    return (
      <div key= { id }>
        <p>{ nombre }</p>
        <form
          onSubmit = {e => {
            e.preventDefault();
            setSpecialty({ variables: { id:'vjzX8bXs7QKHFRV4FoFd', nombre : input.value } });
            input.value = '';
          }}
        >
        <input 
          ref = {node => {
            input = node;
          }}
        />
        <button type = 'submit'>Actualizar especialidad</button>  
        </form>
      </div>
    )
  })
}