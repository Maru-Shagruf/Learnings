import {Button} from "@mui/material"
function Buttonn({ text, onClick, variant,color}) {
  return (
    <Button color={color} variant={variant} onClick={onClick}>
      {text}
    </Button>
  );
}

export default Buttonn;
