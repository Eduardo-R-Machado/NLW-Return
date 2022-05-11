import { feedbackTypes, FeedbackType } from ".."

// criando uma propriedade para o feedbackTypeStep -> 6
interface FeedbackTypeStepProps {
    onFeedbackTypeChanged: (type: FeedbackType) => void
}

export function FeedbackTypeStep({onFeedbackTypeChanged}: FeedbackTypeStepProps) {

    return (
        <div className="flex py-8 gap-2 w-full">
        {Object.entries(feedbackTypes).map(([key, value]) => {
            return (
                <button
                    key={key}
                    type="button"
                    className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-violet-400 focus:border-violet-400 focus:outline-none"
                    onClick={() => onFeedbackTypeChanged(key as FeedbackType)}
                >
                    <img src={value.image.source} alt={value.image.alt} />
                    <span>{value.title}</span>
                </button>
            )
        })}
        </div>
    )
}