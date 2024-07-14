import { Button } from "./components/ui/button";
import { Separator } from "./components/ui/separator";
import { Github, FileVideo, Upload } from 'lucide-react'
import { Textarea } from "./components/ui/textarea";
import { Label } from "./components/ui/label";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem

 } from "./components/ui/select";

export function App() {

  return (
    <div className=" min-h-screen flex flex-col">
      {/* https://tailwindcss.com/ */}
      <div className="px-6 py-3 flex items-center justify-between border-b">
        <h1 className="text-lg font-bold">viewer.ai</h1>

        <div className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground">
            Developed with love by me with ❤️
          </span>
          <Separator orientation="vertical" className="h-6"/>
          <Button variant="outline">
            <Github className="w-4 h-4 mr-2"/> 
            Github 
          </Button>
        </div>

      </div>


      <main className=" flex-1 p-6 flex gap-6">
        <div className=" flex flex-col flex-1 gap-4">
          {/* <div className="grid grid-rows-2 gap-4 flex-1"> */}
          <div className="flex flex-col gap-4 flex-1">
            <Textarea
              className="resize-none p-4 leading-relaxed flex-1" 
              placeholder="Inclua o prompt para a IA"
            />
            <Textarea
              className="resize-none p-4 leading-relaxed flex-1" 
              placeholder="Resultado gerado" 
              readOnly
            />
          </div>
          <p className="">
            Lembre-se voce pode utilizar a variavel <code className="text-violet-700">{'{transcription}'}</code> no seu prompt para adicionar valores
          </p>
        </div>

        <aside className=" w-80 space-y-6">
          <form className="space-y-6">
            <label 
              htmlFor="video"
              className="border flex rounded-md aspect-video border-dashed cursor-pointer text-sm flex-col gap-2 items-center justify-center text-muted-foreground hover:bg-primary/10"  
            >
              <FileVideo className="w-4 h-4" />
              Selecione um video
            </label>
            <input type="file" id="video" accept="video/mp4" className="sr-only" />

            <Separator />
            <div className="space-y-2">
              <Label htmlFor="transcription-prompt">Prompt de transcrição</Label>
              <Textarea 
                id="transcription-prompt" 
                className="h-20 leading-relaxed resize-none"
                placeholder="Digite aqui as plavaras chaves a serem adicionadas ao texto transcrito"
              />
            </div>
            <Button type="submit" className="w-full">
              <Upload className="w-4 h-4 mr-2"></Upload>
              Carregar video
            </Button>
          </form>

          <Separator />

          <form className="space-y-6">
            <div className="space-y-2">
              <Label> Modelo </Label>
              <Select defaultValue="gpt3.5">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="gpt3.5"> GPT 3.5-turbo 16k</SelectItem>
                </SelectContent>
              </Select>
            </div>

          </form>
        </aside>
      </main>
    </div>
  )
}