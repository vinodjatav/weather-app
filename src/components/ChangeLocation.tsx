import React from "react";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Button } from "@mui/material";

export interface DialogProps {
  id: string;
  open: boolean;
  value: string;
  children?: React.ReactNode;
  onClose: (value?: string) => void;
}
export const ChangeLocation = (props: DialogProps) => {
  const { open, value: valueProp, children, onClose, ...other } = props;
  const [value, setValue] = React.useState(valueProp);

  React.useEffect(() => {
    if (!open) {
      setValue(valueProp);
    }
  }, [valueProp, open]);

  const handleCancel = () => {
    onClose();
  };

  const handleOk = () => {
    onClose(value);
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };
  return (
    <Dialog
      open={open}
      sx={{
        "& .MuiDialog-paper": { width: "20%", maxHeight: 400, maxWidth: "60%" },
        borderRadius: "8px",
      }}
      PaperProps={{
        style: {
          background:
            "linear-gradient(152.19deg, rgb(102 152 155) -0.04%, rgb(76 81 164 / 90%) 100%)",
          color: "#000",
        },
      }}
    >
      <DialogTitle>Change Location</DialogTitle>
      <DialogContent sx={{ color: "#000" }}>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Enter location"
          type="text"
          fullWidth
          variant="standard"
          onChange={handleChange}
          sx={{
            ".MuiFormLabel-root": { color: "#000" },
            ".Mui-focused": { color: "#000" },
          }}
        />
      </DialogContent>
      <DialogActions sx={{ justifyContent: "space-between" }}>
        <Button
          sx={{
            color: "#fff",
            background:
              "linear-gradient(152.19deg, rgba(100, 168, 171, 0.9) -0.04%, rgba(83, 91, 230, 0.9) 100%)",
          }}
          onClick={handleCancel}
        >
          Cancel
        </Button>
        <Button
          sx={{
            color: "#fff",
            background:
              "linear-gradient(152.19deg, rgba(100, 168, 171, 0.9) -0.04%, rgba(83, 91, 230, 0.9) 100%)",
          }}
          onClick={handleOk}
        >
          Apply
        </Button>
      </DialogActions>
    </Dialog>
  );
};
