import { FeedbackType, feedbackTypes } from "..";
import { CloseButton } from "../../CloseButton";

interface IFeedbackTypeProps {
  onFeedbackTypeChange: (type: FeedbackType) => void;
}

export const FeedbackTypeStep = ({
  onFeedbackTypeChange,
}: IFeedbackTypeProps) => {
  return (
    <>
      <header className="flex items-center w-full">
        <span className="text-xl leading-6 text-center flex-grow">
          Deixe seu feedback
        </span>
        <CloseButton />
      </header>
      <div className="grid grid-cols-3 py-8 gap-2 w-full">
        {Object.entries(feedbackTypes).map(([key, value]) => {
          return (
            <button
              key={key}
              type="button"
              onClick={() => onFeedbackTypeChange(key as FeedbackType)}
              className="bg-zinc-800 rounded-lg py-5 w-24 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 outline-none"
            >
              <img alt={value.image.alt} src={value.image.source} />
              <span>{value.title}</span>
            </button>
          );
        })}
      </div>
    </>
  );
};
