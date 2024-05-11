import { useTheme } from '@mui/material/styles';
import {
  Card,
  CardContent,
  Typography,
  Button,
  Chip,
  CircularProgress,
  Box,
} from '@mui/joy';
import { Avatar } from '@mui/material';

const JobsCard = ({ jobDetails }) => {
  const theme = useTheme();
  const {
    jdUid,
    jobDetailsFromCompany,
    maxJdSalary,
    minJdSalary,
    location,
    jobRole,
    companyName,
    logoUrl,
    minExp,
  } = jobDetails;

  const jobCardStyle = {
    maxWidth: '345px',
    backgroundColor: 'rgb(255, 255, 255)',
    boxShadow: 'rgba(0, 0, 0, 0.25) ',
    borderRadius: '25px',
    height: { md: '576px', sm: '650px' },
    '&:hover': {
      transition: 'all 800ms cubic-bezier(0.19, 1, 0.22, 1)',
      transform: 'scale(1.01)',
    },
    mb: '50px',
  };

  const jdStyle = {
    fontSize: '14px',
    height: '175px',
    whiteSpace: 'pre-wrap',
    scrollBehavior: 'smooth',
    WebkitMaskImage: 'linear-gradient(black, transparent)',
  };

  return (
    <Card sx={jobCardStyle} key={jdUid}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box>
          <Chip variant='outlined' size='sm'>
            ⏳ Posted 2 days ago
          </Chip>
        </Box>
        <Box>
          <CircularProgress
            size='md'
            variant='outlined'
            sx={{
              '& .MuiLinearProgress-bar': {
                color: 'rgb(85, 239, 196) !important.',
              },
            }}
            determinate
            value={50}
          />
        </Box>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'start' }}>
        <Box>
          <img
            srcSet={`${logoUrl}?h=60&w=30&fit=crop&auto=format&dpr=2 2x`}
            src={`${logoUrl}?h=50&fit=crop&auto=format`}
            alt={companyName}
          />
        </Box>
        <Box
          sx={{
            ml: '3px',
            justifyContent: 'start',
          }}
        >
          <Typography
            sx={{
              textAlign: 'start',
              fontSize: '13px',
              fontWeight: 600,
              letterSpacing: '1px',
              mb: '3px',
              color: '#8b8b8b',
            }}
          >
            {companyName}
          </Typography>
          <Typography
            sx={{
              fontSize: '14px',
              lineHeight: 1.8,
            }}
          >
            {jobRole}
          </Typography>
          <Typography
            sx={{ fontSize: '12px', fontWeight: 500 }}
            textAlign='start'
          >
            {location}
          </Typography>
        </Box>
      </Box>

      <CardContent sx={{ backgroundColor: theme.palette.background.paper }}>
        <Typography variant='body2' textAlign='start' fontSize='14px'>
          Estimated Salary:{' '}
          {`${minJdSalary ?? ''}${minJdSalary && maxJdSalary ? '-' : ''}${
            maxJdSalary ?? ''
          }`}{' '}
          LPA
        </Typography>{' '}
        <Typography textAlign='start' fontSize='17px'>
          About Company:
        </Typography>{' '}
        <Typography variant='body2' sx={jdStyle}>
          {jobDetailsFromCompany}
        </Typography>
        <Button
          sx={{
            ':hover': {
              backgroundColor: 'transparent',
            },
          }}
          onClick={function () {}}
          variant='plain'
        >
          show more
        </Button>
        <Typography
          sx={{
            textAlign: 'start',
            fontSize: '13px',
            fontWeight: 600,
            letterSpacing: '1px',
            mb: '3px',
            color: '#8b8b8b',
          }}
        >
          Minimum Experience
        </Typography>
        <Typography
          sx={{
            textAlign: 'start',
            fontSize: '14px',
            lineHeight: 1.5,
            mb: 1,
          }}
        >
          {minExp} Years
        </Typography>
        <Button
          size='lg'
          variant='contained'
          sx={{ backgroundColor: 'rgb(85, 239, 196)', mb: 1.5 }}
        >
          ⚡️ Easy Apply
        </Button>
        <Button
          size='lg'
          sx={{ backgroundColor: '#1a73e8', color: 'white' }}
          variant='contained'
          startDecorator={
            <Avatar size='small' sx={{ width: 24, height: 24 }} />
          }
        >
          <Typography
            level='title-md'
            sx={{ fontWeight: '450', color: 'white' }}
          >
            Ask for referral
          </Typography>
        </Button>
      </CardContent>
    </Card>
  );
};

export default JobsCard;
