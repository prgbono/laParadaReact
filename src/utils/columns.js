import React from 'react'
// TODO ver cómo formatear cantidades. Para ello usar formatNumberWithThousands de claveX
// import { dateFilter, formatNumberWithThousands } from 'Utils'
// import styled from '@emotion/styled'

export const productColumns = [
  {
    title: 'Nombre',
    dataIndex: 'name',
    sorter: {
      compare: (a, b) => a.name - b.name,
      multiple: 6,
    },
  },
  {
    title: 'Categoria',
    dataIndex: 'category',
    sorter: {
      compare: (a, b) => a.category - b.category,
      multiple: 5,
    },
  },
  {
    title: 'Especialidad',
    dataIndex: 'specialty',
    sorter: {
      compare: (a, b) => a.specialty - b.specialty,
      multiple: 4,
    },
  },
  {
    title: 'Pvp',
    dataIndex: 'pvp',
    sorter: {
      compare: (a, b) => a.pvp - b.pvp,
      multiple: 3,
    },
  },
  {
    title: 'Existencias',
    dataIndex: 'stock',
    sorter: {
      compare: (a, b) => a.stock - b.stock,
      multiple: 2,
    },
  },
  {
    title: 'Hay?',
    dataIndex: 'minStock',
    sorter: {
      compare: (a, b) => a.minStock - b.minStock,
      multiple: 1,
    },
  }
];

