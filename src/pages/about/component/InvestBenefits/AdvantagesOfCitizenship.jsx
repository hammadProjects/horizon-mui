import {  Container,  } from '@mui/material'
import AdvantagesTitle from './AdvantagesTitle'
import StepsToApply from './StepsToApply'

const AdvantagesOfCitizenship = () => {
  return (
    <Container sx={{backgroundColor: "#FFFFFF", padding: "72px 0px 113px 0px", marginTop: "100px" }}>
        <AdvantagesTitle />
        <StepsToApply />
    </Container>
  )
}

export default AdvantagesOfCitizenship
