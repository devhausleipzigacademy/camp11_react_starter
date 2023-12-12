type Variant = "primary" | "secondary" | "danger" | "warning";

type Props = {
  children: string;
  variant?: Variant;
};

function Button({ children, variant }: Props) {
  let buttonColor = "blue";

  if (variant === "danger") {
    buttonColor = "red";
  }
  if (variant === "warning") {
    buttonColor = "yellow";
  }

  return (
    <button
      style={{
        backgroundColor: buttonColor,
        color: "white",
        padding: "10px 20px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",
      }}
    >
      {children}
    </button>
  );
}

export default Button;
