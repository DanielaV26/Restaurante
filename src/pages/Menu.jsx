import { MenuAcordeon } from '../components/MenuAcordeon'

export const Menu = () => {
  return (
    <>
    <h1 className="font-praise text-5xl mx-auto text-center">Menú</h1>

    <div className="relative bg-fixed bg-center bg-cover bg-no-repeat"
    style={{backgroundImage:"linear-gradient(rgba(256, 256, 256, 0.8), rgba(256, 256, 256, 0.8)), url('https://res.cloudinary.com/dhijxrbsk/image/upload/v1695325166/MicrosoftTeams-image_yionjq.jpg')"}}>
    <MenuAcordeon/>
    </div>
    </>
  )
}
