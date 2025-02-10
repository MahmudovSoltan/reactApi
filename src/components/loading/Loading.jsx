import { Backdrop, CircularProgress } from "@mui/material";

const Loading = () => {
  return (
    <div>
      <div>
        <Backdrop
          sx={(theme) => ({ color: "#fff", zIndex: theme.zIndex.drawer + 1 })}
          open={open}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      </div>
    </div>
  );
};

export default Loading;
