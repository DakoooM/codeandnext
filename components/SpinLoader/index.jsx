export function SpinLoader({ width = 30, height = 30, color = "white", size = 3 }) {
  return (
    <span className="SpinLoader"
      style={{
        width: `${width}px`,
        height: `${height}px`,
        border: `${size}px solid ${color}`,
        borderBottomColor: "transparent"
      }}
    ></span>
  )
}