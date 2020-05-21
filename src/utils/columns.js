import React from 'react'

export const productColumns = [
  {
    title: 'Nombre',
    dataIndex: 'name',
    key: 'nombre',
    //sorter: true,
    // sorter: {
    //   compare: (a, b) => a.name.length - b.name.length,
    //   multiple: 6,
    // },
    //sortDirections: ['ascend', 'descend', 'ascend'],
  },

  {
    title: 'Categoria',
    dataIndex: 'category',
    // sorter: {
    //   compare: (a, b) => a.category - b.category,
    // },
  },
  {
    title: 'Especialidad',
    dataIndex: 'specialty',
    // sorter: {
    //   compare: (a, b) => a.specialty - b.specialty,
    // },
  },
  {
    title: 'Pvp',
    dataIndex: 'pvp',
    // sorter: {
    //   compare: (a, b) => a.pvp - b.pvp,
    //   multiple: 2,
    // },
  },
  {
    title: 'Existencias',
    dataIndex: 'stock',
    // sorter: {
    //   compare: (a, b) => a.stock - b.stock,
    //   multiple: 1,
    // },
  }
];


