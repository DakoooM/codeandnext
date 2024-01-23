function Section({ width, height, cls, uniqueId, children, ...props }) {
  return (
    <section className={cls} id={uniqueId} {...props} style={{ width: width, height: height }}>
      {children}
    </section>
  )
}

export default Section;