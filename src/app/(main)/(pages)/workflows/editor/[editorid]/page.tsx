import { ConnectionsProvider } from "@/Providers/connection-provider"
import EditorProvider from "@/Providers/editor-proivder"
import EditorCanvas from "./_components/editor-canvas"

type Props = {}
const page = (props: Props) => {
  return (
    <div className="h-full">
      <EditorProvider>
        <ConnectionsProvider>
          <EditorCanvas/>
        </ConnectionsProvider>
      </EditorProvider>
        

    </div>
  )
}
export default page