"use client";
import useWindowSize from "@/hooks/useWindowSize";

export default function Carrousel({
  children,
}: {
  children: React.ReactNode[];
}) {
  const { width } = useWindowSize();

  const getNumberOfVisibleItems = () => {
    if (width === 0) return 4;
    return width < 768 ? 1 : width < 1024 ? 2 : 4;
  };
  const visibleItems = children.slice(0, getNumberOfVisibleItems());
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "16px",
      }}
    >
      <button
        className="arrow-button"
        onClick={() => alert("Elementos previos")}
        style={{
          color: "black",
          fontSize: "3rem",
          fontWeight: "bold",
        }}
      >
        {"<"}
      </button>
      <ul className="discounts-grid">
        {visibleItems.map((item, index) => (
          <li key={index} className="discounts-grid-item">
            {item}
          </li>
        ))}
      </ul>
      <button
        className="arrow-button"
        onClick={() => alert("Elementos siguientes")}
        style={{
          color: "black",
          fontSize: "3rem",
          fontWeight: "bold",
        }}
      >
        {">"}
      </button>
    </div>
  );
}
