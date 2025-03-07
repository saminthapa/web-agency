import { PEOPLE_URL } from "@/constants";
import Image from "next/image";

interface CampProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
}

const CampSite = ({backgroundImage, title, subtitle, peopleJoined}: CampProps) => {
  return (
    <div className={`h-[300px] lg:h-[350px] xl:h-[400px] w-full max-w-[900px] ${backgroundImage} bg-cover bg-no-repeat rounded-3xl`}>


      <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
        <div className="flexCenter gap-4">
          <div className="rounded-full bg-green-50 p-4">
            <Image 
            src='/folded-map.svg'
            alt='map'
            width={28}
            height={28}/>
          </div>

          <div className="flex flex-col gap-1">
            <h4 className="bold-18 text-white">{title}</h4>
            <p className="regular-14 text-white">{subtitle}</p>
          </div>
        </div>

        <div className="flexCenter gap-16">
        <div className="flex items-center gap-4">
  <div className="flex -space-x-2">
    {PEOPLE_URL.map((url) => (
      <Image 
        className="inline-block h-10 w-10 rounded-full"
        src={url}
        key={url}
        alt="person"
        width={40}  
        height={40}
      />
    ))}
  </div>
  <p className="bold-16 md:bold-20 text-white">{peopleJoined}</p>
</div>

        </div>
      </div>
    </div>
  )

}

const Camp = () => {
  return (
    <section className="2xl:max-container relative flex flex-col items-center py-10 lg:mb-10 lg:py-10 xl:mb-20">

   <div className="hide-scrollbar flex h-[300px] lg:h-[350px] xl:h-[400px] w-full justify-center gap-8 px-10 overflow-x-auto">



        <CampSite
        backgroundImage="bg-bg-img-1"
        title="Jungle"
        subtitle="Chitwan National Park"
        peopleJoined="50+ Joined"
        />
        <CampSite
        backgroundImage="bg-bg-img-2"
        title="River"
        subtitle="Narayani river"        
        peopleJoined="50+ Joined"
        />
      </div>

      <div className="flexEnd mt-10 px-6 lg:-mt-40 lg:mr-[-400]">
        <div className="bg-green-50 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
          <h2 className="regular-24 md:regular-32 2xl:regular-64 capitalize text-white">
            <strong>Unsure </strong>Of Your Next Step?
          </h2>
          <p className="regular-14 xl:regular-16 mt-5 text-white">
          Let <strong>STK Travel</strong> lead you to nature beauty. Discover stunning landscapes and start your next adventure today!
          </p>
          <Image 
          src="/quote.svg"
          alt="camp-2"
          width={186}
          height={219}
          className="camp-quote"
          />

        </div>

      </div>
    </section>
  )
}

export default Camp
