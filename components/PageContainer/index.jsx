import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

function PageContainer({ children }) {
  return (
    <div className={`PagesContainer ${inter.className}`}>
      {children}
    </div>
  )
}

export default PageContainer;