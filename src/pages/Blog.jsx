import { Button, Card, CardFooter, CardHeader, Image } from "@nextui-org/react"

export const Blog = () => {
  return (
    <div className="lg:flex w-full gap-6 items-center justify-center p-12 px-36">
    <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-7">
      <CardHeader className="absolute z-10 top-1 flex-col items-start">
      </CardHeader>
      <Image
        removeWrapper
        alt="Relaxing app background"
        className="z-0 w-full h-full object-cover"
        src="https://res.cloudinary.com/dhijxrbsk/image/upload//c_thumb,w_2500,h_2000,g_auto/v1694633020/historiadelapizza_vaqzaj.jpg"
      />
      <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
        <div className="flex flex-grow gap-2 items-center">
          <Image
            alt="Breathing app icon"
            className="rounded-full w-10 h-11 bg-black"
            src="https://res.cloudinary.com/dhijxrbsk/image/upload/v1694633020/historiadelapizza_vaqzaj.jpg"
          />
          <div className="flex flex-col">
            <p className="text-tiny text-white/80 font-bold uppercase">Historia de la pizza</p>
            <p className="text-tiny text-white/70">Un verdadero fanático de la pizza debe conocer su historia. ¡Te invitamos a conocerla!</p>
          </div>
        </div>
        <Button radius="full" size="sm">Ver video</Button>
      </CardFooter>
    </Card>
    <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-7">
      <CardHeader className="absolute z-10 top-1 flex-col items-start">
      </CardHeader>
      <Image
        removeWrapper
        alt="Relaxing app background"
        className="z-0 w-full h-full object-cover"
        src="https://res.cloudinary.com/dhijxrbsk/image/upload/v1694633038/top50_pdgnet.jpg"
      />
      <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
        <div className="flex flex-grow gap-2 items-center">
          <Image
            alt="Breathing app icon"
            className="rounded-full w-10 h-11 bg-black"
            src="https://res.cloudinary.com/dhijxrbsk/image/upload/v1694633038/top50_pdgnet.jpg"
          />
          <div className="flex flex-col">
            <p className="text-tiny text-white/80 font-bold uppercase">Top 50 Pizza Europa 2023</p>
            <p className="text-tiny text-white/70">Mantente actualizado sobre las mejores pizzerías del mundo.</p>
          </div>
        </div>
        <Button radius="full" size="sm">Ver video</Button>
      </CardFooter>
    </Card>
    </div>
  )
}
