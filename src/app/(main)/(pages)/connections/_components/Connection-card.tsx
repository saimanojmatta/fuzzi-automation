import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ConnectionTypes } from "@/lib/types"
import Image from "next/image"
import Link from "next/link"

type Props = {
  type: ConnectionTypes
  icon: string
  title: ConnectionTypes
  description: string
  callback?: () => void
  connected: {} & any
}
const ConnectionCard = ({type,icon,title,description,connected}: Props) => {
  return (
   <Card className="flex w-full items-center justify-between">
    <CardHeader className="flex flex-row gap-2">
        <div className="flex flex-col gap-4">
            <Image src={icon} height={30} width={30} alt="Object-contain"/>
        </div>
        <div>
            <CardTitle className="text-lg">
                {title}
            </CardTitle>
            <CardDescription>{description}</CardDescription>
        </div>
    </CardHeader>
    <div className="flex flex-col items-center gap-2 p-4">
        {connected[type]?(
            <div  className="border-bg-primary rounded-lg border-2 px-3 py-2 font-bold text-white">
                Connected
            </div>
        ):(
            <Link className=" rounded-lg bg-primary p-2 font-bold text-primary-foreground"
             href={
                title==="Discord"
                ?process.env.NEXT_PUBLIC_DISCORD_REDIRECT!
                : title == 'Notion'
                ? process.env.NEXT_PUBLIC_NOTION_AUTH_URL!
                : title == 'Slack'
                ? process.env.NEXT_PUBLIC_SLACK_REDIRECT!
                : '#'
             }
            >Connect
            </Link>
        )}
    </div>
   </Card>
  )
}
export default ConnectionCard