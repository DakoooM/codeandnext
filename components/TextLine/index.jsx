function TextLine({ text, mBottom = 0 }) {
  return (
    <span className="TextLine" style={{ marginBottom: mBottom }}>
      <div className="line"></div>
      <div className="text">{text}</div>
      <div className="line"></div>
    </span>
  )
}

export default TextLine;