import { ArrowLeft, Camera } from "phosphor-react";
import { FeedbackType, feedbackTypes } from "..";
import { CloseButton } from "../../CloseButton";

interface IFeedbackContentStepProps {
  feedbackType: FeedbackType;
  onFeedbackRestartRequested: () => void;
}

export const FeedbackContentStep = ({
  feedbackType,
  onFeedbackRestartRequested,
}: IFeedbackContentStepProps) => {
  const { title, image } = feedbackTypes[feedbackType];

  return (
    <>
      <header className="flex items-center justify-between w-full">
        <button
          type="button"
          className="text-zinc-400 hover:text-zinc-100"
          onClick={onFeedbackRestartRequested}
        >
          <ArrowLeft weight="bold" className="w-4 h-4" />
        </button>
        <span className="text-xl leading-6 flex items-center gap-2">
          <img src={image.source} alt={image.alt} className="w-6 h-6" />
          {title}
        </span>
        <CloseButton />
      </header>

      <form className="my-4 w-full" action="">
        <textarea
          className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 resize-none focus:outline-none"
          placeholder="Conte em detalhes qual o problema."
        />
        <footer className="flex gap-2 mt-2">
          <button
            type="button"
            className="p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500"
          >
            <Camera className="w-6 h-6" />
          </button>

          <button
            type="submit"
            className="p-2 bg-brand-500 rounded-md border-transparent flex flex-1 justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors"
          >
            Enviar feedback
          </button>
        </footer>
      </form>
    </>
  );
};
