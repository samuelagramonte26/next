import { DartLayout } from "../components/layout/DartLayout"
import { MainLayout } from "../components/layout/MainLayout"


const PricingPage = () => {
  return (
    <h1>
        Pricing
    </h1>
  )
}

export default PricingPage



PricingPage.getLayout = function getLayout(page:JSX.Element|JSX.Element[]) {
    return (
      <MainLayout>
        <DartLayout>
          {page}
        </DartLayout>
      </MainLayout>
    )
  }