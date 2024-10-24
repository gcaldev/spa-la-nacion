export default function Button({
  onClick,
  children,
  borderRadius = "32px",
  size = "m",
  theme = "primary",
}: {
  onClick: () => void;
  borderRadius?: string;
  size?: "s" | "m" | "l";
  theme?: "primary" | "secondary";
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`${theme}-btn`}
      style={{
        borderRadius,
        padding:
          size === "s" ? "8px" : size === "m" ? "12px 24px" : "16px 32px",
        fontSize: size === "s" ? "0.8rem" : size === "m" ? "1rem" : "1.15rem",
      }}
    >
      {children}
    </button>
  );
}
