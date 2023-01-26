
import AnimalFilterLayout from '@features/animals/animal-filter/AnimalFilterLayout'
import AnimalListLayout from '@features/animals/animal-list/AnimalListLayout'
import HeaderLayout from '@features/header/HeaderLayout'
import { Container, Grid } from '@mui/material'
import React from 'react'

export default function HomeComponent() {
  return (
    <Container>
      <Grid container spacing={0}>
        <HeaderLayout />
        <AnimalFilterLayout />
        <AnimalListLayout />
      </Grid>
    </Container>
  )
}
