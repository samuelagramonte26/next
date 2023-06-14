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



PricingPage.getLayout = function getLayout(page) {
    return (
      <MainLayout>
        <DartLayout>
          {page}
        </DartLayout>
      </MainLayout>
    )
  }