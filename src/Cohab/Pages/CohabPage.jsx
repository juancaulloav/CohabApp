import { AddOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { CohabLayout } from "../layout/CohabLayout";
import { NoteViews } from "../views/NoteViews";
import { NothingSelectedView } from "../views/NothingSelectedView";

export const CohabPage = () => {
  return (
    <CohabLayout>
      {/* <Typography>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae
        corrupti magni debitis? Laudantium id deleniti officia, temporibus modi
        beatae nulla voluptatum debitis necessitatibus amet, ipsum eius
        assumenda adipisci saepe delectus!
      </Typography> */}
      <NoteViews />
      {/* <NothingSelectedView /> */}

      <IconButton
        size="large"
        sx={{
          color: "white",
          backgroundColor: "error.main",
          ":hover": { backgroundColor: "error.main", opacity: 0.9 },
          position: "fixed",
          right: 50,
          bottom: 50
        }}
      >
        <AddOutlined sx={{ fontSize :30}}/>
      </IconButton>
    </CohabLayout>
  );
};
