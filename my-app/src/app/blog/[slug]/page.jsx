import dateFormate from "@/utils/dateFormate";
import { Calendar } from "lucide-react";
import Image from "next/image";


export default function page() {

  const tempTages="SpaceX,Nasa,Exploration";
  const tempHtml=`
     <p>Content Demo</p>

  `
  return (
    <section>
      <div className="flex flex-col gap-4 items-center">
        <Image className="w-[90%] md:w-[700px]" alt="thumbnail" src={"/thumbnails/dreams.png"} width={500} height={250} />
        <div className="meta-of-a-blog space-y-2">
          <div className="flex gap-2 items-center">
          <Calendar className="h-6 w-6"/>
          <p className="text-gray-400 text-xs">Created at: {dateFormate(new Date)}</p>
        </div>
        <div className="text-xs flex iteams-center gap-2">
          <p>Category: </p>
          <p className="badge border bg-gray-600/30 border-gray-700 w-fit px-2 py-1 rounded"> Space Exploration</p>

        </div>
        <div className="text-xs flex iteams-center gap-2">
          <p>Category: </p>
          {tempTages.split(",").map((tag,index)=><p key={index} className="badge border bg-gray-600/30 border-gray-700 w-fit px-[4px] py-[2px] rounded">{tag}</p>)}

        </div>
        {/* <div className="content" dangerouslySetInnerHTML={{__html:tempHtml}}></div> */}
        
        </div>
        <p className="text-gray-400 text-sm w-[90%] md:w-2/3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt maiores dignissimos ipsa commodi! Illum totam officia tempore explicabo fuga enim at amet labore distinctio ut ab obcaecati, sunt est laudantium, quis, accusamus alias odio quo vel? Amet officia vel fuga accusamus aliquid. 
        
          Blanditiis nisi qui, iusto, necessitatibus vel, quod atque magni sequi praesentium molestiae recusandae. Explicabo architecto quos illum necessitatibus recusandae. Sunt eaque perspiciatis animi reiciendis repellat laborum, similique aperiam 
          
          libero saepe itaque sit repellendus accusamus quaerat repudiandae assumenda explicabo corporis doloribus odio aut doloremque quos non quas debitis quo? Vitae blanditiis consequatur eligendi harum. Est, iure sit consequatur laborum quidem iusto porro reprehenderit laboriosam doloribus assumenda 
          
          fuga soluta animi voluptatem esse nemo ipsam fugit repudiandae quo impedit quis earum laudantium magnam!
          Reprehenderit assumenda dolorum quia quasi nisi maxime repudiandae? Sint excepturi tempore quis assumenda? Qui repudiandae tenetur veritatis dicta voluptates quae ullam inventore officia distinctio dolores, laboriosam maxime voluptatem.</p>
      </div>

    </section>
  )
}


