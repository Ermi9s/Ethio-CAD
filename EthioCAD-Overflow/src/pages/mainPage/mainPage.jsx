import React from 'react'
import { Box } from '@mui/material'
import MainPost from '../../components/Cards/mainPost'
import Nav from '../../components/nav-bar/Nav'
import WelcomeCard from '../../components/Cards/welcomeCard'
function mainPage() {
  return (
    <>
    <Nav/>
    <Box paddingX={10}>
      <WelcomeCard/>
      <MainPost />
      <MainPost />
      <MainPost />
      <MainPost />
      <MainPost />
      <MainPost />
    </Box>
    </>
  )
}

export default mainPage
