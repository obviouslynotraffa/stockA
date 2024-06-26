import ManagementCard from "../../components/ManagementCard"
import { ManagementData } from "../../constants"

export const Management = () => {
  return (
    <section className='py-16 padding-x max-w-screen-wide max-container flex flex-col gap-8'>
        <h3 className='font-bold font-palanquin text-4xl'>
            Management
        </h3>
        <div className='flex flex-row flex-wrap gap-10 md:gap-5 justify-center'>
            {ManagementData.map((item, index) => {
                return (
                    <ManagementCard 
                        key={index}
                        imgURL={item.imgURL}
                        name={item.name}
                        title={item.title}
                    />
                )
            })}
            
        </div>
    </section>
  )
}
