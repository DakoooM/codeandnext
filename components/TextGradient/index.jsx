export function TextGradientOutlined({
  colors = ["#8A2BE2", "#c02be2"],
  stroke = 10,
  rotate = 100,
  children 
}) {
  return (
    <span style={{
      background: `-webkit-linear-gradient(${rotate}deg, ${colors[0]}, ${colors[0]})`,
      backgroundClip: "text",
      WebkitBackgroundClip: "text",
      WebkitTextStroke: `${stroke}px transparent`,
      color: "var(--container-pages)",
      padding: `0 ${stroke}px`,
    }}>
      {children}
    </span>
  )
}

export function TextGradient({
  colors = ["#8A2BE2", "#c02be2"],
  rotate = 100,
  children 
}) {
  return (
    <span style={{
      background: `-webkit-linear-gradient(${rotate}deg, ${colors[0]}, ${colors[1]})`,
      backgroundClip: "text",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent"
    }}>
      {children}
    </span>
  )
}