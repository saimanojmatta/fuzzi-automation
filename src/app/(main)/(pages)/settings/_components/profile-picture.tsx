"use client"
import { useRouter } from "next/navigation"
import UploadCareButton from "./Uploadcare-button"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

type Props = {
  userImage:string | null,
  onDelete?:any,
  onUpload:any
}
const ProfilePicture = ({userImage,onDelete,onUpload}: Props) => {
  const router=useRouter()
  const onRemoveProfileImage=async()=>{
    const response=await onDelete()
    if(response){
      router.refresh()
    }
  }
  return (
    <div className="flex flex-col" >
      <p className="text-lg text-white" >Profile picture</p>
      <div className="flex h-[30vh] flex-col items-center justify-center">
         {userImage?(
          <>
          <div className="relative h-full w-2/12 ">
            {/* <Image className="rounded-lg" src={userImage} alt="User_image" fill/> */}
            <Avatar>
              <AvatarImage src={userImage} alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          <AlertDialog>
              <AlertDialogTrigger className="m-5 text-sm  self-start hover:bg-[#2F006B] hover:text-white bg-white text-black rounded-sm p-2">Remove Image</AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete your account
                    and remove your data from our servers.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction onClick={onRemoveProfileImage}>Remove</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
          </AlertDialog>
          </div>


          {/* <Button className="bg-transparent text-white/70 hover:bg-transparent hover:text-white" onClick={onRemoveProfileImage}>
            <X/>Remove Logo
          </Button> */}
          </>
         ):(
          <UploadCareButton onUpload={onUpload} />
         )}
        
      </div>
    </div>
  )
}
export default ProfilePicture