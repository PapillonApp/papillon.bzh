export default function Spacer({
  height = 16
} : {
  height?: number | string;
}) {
  return (
    <div className="spacer"
      style={{
        height: typeof height === "number" ? `${height}px` : height,
        width: "100%",
        display: "block",
        margin: "0 auto",
      }}
    />
  );
}