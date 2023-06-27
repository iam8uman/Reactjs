// import navbar from "./components/navbar";
import { Button, Typography, styled } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import SearchIcon from "@mui/icons-material/Search";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";

function App() {
  // this component wala part does not work i don't know hy
  const ownButton = styled(Button)({
    background: "secondary",
    color: "primary",
    border: "2px solid purple",
    margin: "3px",
    "&:hover": {
      background: "purple",
      color: "black",
    },
  });

  return (
    <div>
      <Stack direction={"row"} spacing={3} margin={3}>
        {/* <h2 className="color-red">Hello Nepali </h2> */}
        <SearchIcon color="success" />
        <Button color="secondary">Secondary</Button>
        <Button variant="contained" color="success">
          Success
        </Button>
        <Button variant="outlined" color="error">
          Error
        </Button>
        <Button variant="outlined" startIcon={<DeleteIcon />}>
          Delete
        </Button>
        <Button variant="contained" endIcon={<SendIcon />}>
          Send
        </Button>
        <Button startIcon={<AccessAlarmIcon />} color="primary">
          {" "}
          Alarm
        </Button>
      </Stack>
      {/* There is already an h1 in the page, let's not duplicate it. */}
      <Typography variant="h3" component="p">
        This is heading h1 but it's type is p
      </Typography>
      {/* <ownButton>My own </ownButton>/ this is not working properly fine i.e custom button components */}
    </div>
  );
}

export default App;
