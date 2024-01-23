import { SpinLoader } from "@/components/SpinLoader";
import Link from "next/link";

export function Button({
  type = "button",
  variant = "contained", /* text, contained, outlined */
  size = "small", /* small, large, big */
  theme = "purple", /* success: green, danger: red, purple: rose, primary: blue, warning: orange */
  rounded = false,
  classes = "",
  flex = false,
  disabled = false,
  onClick = null,
  isLoading = false,
  width = "auto",
  height = "auto",
  icon = undefined,
  title = undefined,
  borderSize = undefined,
  bgColor = undefined,
  borderColor = "auto",
  color = undefined,
  href = undefined,
  children
}) {
  const loadClasse = isLoading ? "loading" : "";
  const bgDefine = bgColor && typeof bgColor === "string" ? bgColor : typeof bgColor === "object" ? `linear-gradient(90deg, ${bgColor[0]}, ${bgColor[1]})` : "";

  const stylingBtn = {
    color: isLoading || disabled ? "grey" : color,
    borderColor: isLoading || disabled ? "grey" : borderColor,
    borderWidth: borderSize ? borderSize : "initial",
    flex: flex ? 1 : 0,
    borderRadius: rounded ? "30px" : "5px",
    width: width,
    height: height,
  };

  if (bgColor && variant !== "outlined") {
    stylingBtn.background = bgDefine;
  }

  if (href) {
    return (
      <Link
        title={title}
        onClick={e => onClick && !isLoading && onClick(e)}
        disabled={isLoading || disabled}
        href={href}
        className={`Button ${loadClasse} ${theme} ${size} ${variant} ${classes}`}
        style={stylingBtn}
      >
        {isLoading ? (
          <>
            <SpinLoader width={15} height={15} size={3} color="grey" />{children}
          </>
        ) : (
          <>
            {icon ? <span className="icon">{icon}</span> : undefined} {children}
          </>
        )}
      </Link>
    )
  }

  return (
    <button
      type={type}
      title={title}
      onClick={e => onClick && !isLoading && onClick(e)}
      disabled={isLoading || disabled}
      className={`Button ${loadClasse} ${theme} ${size} ${variant} ${classes}`}
      style={stylingBtn}
    >
      {isLoading ? (
        <>
          <SpinLoader width={15} height={15} size={3} color="grey" />{children}
        </>
      ) : (
        <>
          {icon ? <span className="icon">{icon}</span> : undefined} {children}
        </>
      )}
    </button>
  )
}

export function ButtonRow({ 
  mWidth = "auto", 
  mTop = 0, 
  mBottom = 0,
  children
}) {
  return (
    <div className="ButtonRow" style={{
      maxWidth: mWidth,
      marginTop: mTop,
      marginBottom: mBottom,
    }}>
      {children}
    </div>
  )
}