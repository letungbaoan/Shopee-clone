import Footer from "src/components/Footer"
import RegisterHeader from "src/components/RegisterHeader"

interface Props {
  children?: React.ReactNode,
  text: string
}

export default function RegisterLayout({children, text} : Props) {
  return <div>
    <RegisterHeader text={text} />
    {children}
    <Footer />
  </div>
}
