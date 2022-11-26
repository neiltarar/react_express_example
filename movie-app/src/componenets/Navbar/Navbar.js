import Grid from '@mui/material/Unstable_Grid2';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return(
    <Grid 
      container 
      spacing={1} 
      textAlign={'center'}
      paddingTop={'30px'}
      paddingBottom={'30px'}
      style={{background: 'black'}}
      >
      <Grid xs={4}>
      <Link 
          to='/'
          style={{textDecoration: 'none'}}
        >
          <Button
            style={{color:'red'}}
          >
            Home
          </Button>
        </Link>
      </Grid>
      <Grid xs={4}>
      <Link 
          to='/history'
          style={{textDecoration: 'none'}}
        >
          <Button 
            style={{color:'red'}}
          >
            History
          </Button>
        </Link>
      </Grid>
      <Grid xs={4}>
      <Link 
          to='/about'
          style={{textDecoration: 'none'}}
        >
          <Button 
            style={{color:'red'}}
          >
            About
          </Button>
        </Link>
      </Grid>
    </Grid>
  )
}

export default Navbar