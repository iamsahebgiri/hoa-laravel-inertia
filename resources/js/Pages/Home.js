import { HiNewspaper } from 'react-icons/hi'
import Banner from '@/Components/Banner'
import Card from '@/Components/Card'
import Carousel from '@/Components/Carousel'
import Header from '@/Components/Header'
import IconHeading from '@/Components/IconHeading'
import SectionHeading from '@/Components/SectionHeading'
import RecentUpdateCard from '@/Components/RecentUpdateCard'

export default function Home(props) {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Banner title="Admission Open for SSC Batch 2021" href="#" />
      <Header />
      <main className="space-y-16">
      <Carousel />
        <section className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeading
            title="Latest articles and exam updates"
            subtitle="Scroll down to check out our latest articles."
          />

          <Card className="grid md:grid-cols-3 space-y-4 md:space-x-4 md:space-y-0">
            {/* divide-y md:divide-x md:divide-y-0 space-x-4 */}
            <RecentUpdateCard icon="newspaper" colorScheme="green" title="Student notice" />
            <RecentUpdateCard icon="newspaper" colorScheme="purple" title="Latest articles" />
            <RecentUpdateCard icon="newspaper" colorScheme="yellow" title="Current affairs" />
          </Card>
        </section>
        <section className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeading
            title="Popular test series"
            subtitle="Scroll down to check out our latest articles."
          />
        </section>
      </main>
    </div>
  )
}
