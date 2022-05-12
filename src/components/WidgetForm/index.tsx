import { CloseButton } from "../CloseButton";
import { useState } from "react";

import BugImage from '../../assets/Bug.svg';
import NuvemImage from '../../assets/nuvem.svg';
import LampadaImage from '../../assets/lampada.svg';
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";

export const feedbackTypes = {
    BUG: {
        title: 'Problema',
        image: {
            source: BugImage,
            alt: 'Imagem de um inseto representando um bug'
        }
    },
    IDEIA: {
        title: 'Ideia',
        image: {
            source: NuvemImage,
            alt: 'Imagem de uma nuvem representando uma ideia'
        }
    },
    OTHER: {
        title: 'Outro',
        image: {
            source: LampadaImage,
            alt: 'Imagem de uma lâmpada representando outro tipo de feedback'
        },
    },
};

export type FeedbackType = keyof typeof feedbackTypes;


export function WidgetForm() {
    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);


    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">

            {!feedbackType ? (
                <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
            ) : (
                    <FeedbackContentStep feedbackType={feedbackType} />
                )}

            <footer className="text-xs text-neutral-400">
                Feito com amor pelo <a className="underline underline-offset-2" href="https://github.com/eduardo329">TheKidzz</a>
            </footer>
        </div>
    );
}

