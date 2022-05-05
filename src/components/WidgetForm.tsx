import { CloseButton } from "./CloseButton";

import BugImage from '../assets/bug.svg';
import NuvemImage from '../assets/nuvem.svg';
import LampadaImage from '../assets/lampada.svg';

const feedbackTypes = {
    BUG: {
        title: 'Problema',
        image: {
            src: BugImage,
            alt: 'Imagem de um inseto representando um bug'
        }
    },
    IDEIA: {
        title: 'Ideia',
        image: {
            src: NuvemImage,
            alt: 'Imagem de uma nuvem representando uma ideia'
    },
    OTHER: {
        title: 'Outro',
        image: {
            src: LampadaImage,
            alt: 'Imagem de uma lâmpada representando outro tipo de feedback'
    },
},


export function WidgetForm() {
    return (
       <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
           <header>
               <span className="text-xl leading-6">Deixe seu feedback!</span>

               <CloseButton/>
           </header>

           
           <div className="flex py-8 gap-2 w-full">
                <button></button>
           </div>

           <footer className="text-xs text-neutral-400">
                Feito com amor pelo <a className="underline underline-offset-2" href="https://github.com/eduardo329">TheKidzz</a>
           </footer>
        </div>
    );
}
