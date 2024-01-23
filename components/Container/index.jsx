// Width avalaible: 70, 80, 90, 100 (in percent)
function Container({ 
  mTop = 0, 
  mBottom = 0, 
  width = 70, 
  height = false, 
  center = true, 
  children,
  cls = "",
  ...props
}) {
  return (
    <div 
      className={`MinContainer ${cls} wd-${width} ${height ? "height" : ""} ${center ? "center" : ""}`}
      style={{
        marginTop: mTop,
        marginBottom: mBottom
      }} 
      {...props}
    >
      {children}
    </div>
  )
}

export default Container;