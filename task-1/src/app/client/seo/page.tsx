import Image from "next/image"
export default function SEO(){
    return <section className="w-full h-screen grid place-items-center">
        <Image src="/demo-image1.jpg" 
        alt="seo"
        width={500}
        height={500}
        sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw" 
        // srcSet="/demo-image1.jpg 640w, /demo-image2.jpg 1280w"
         />

    </section>
}