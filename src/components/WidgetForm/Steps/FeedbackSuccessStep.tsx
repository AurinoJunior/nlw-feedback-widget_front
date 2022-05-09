import { CloseButton } from "../../CloseButton";

interface IFeedbackSuccessStep {
  onFeedbackRestartRequested: () => void;
}

export const FeedbackSuccessStep = ({
  onFeedbackRestartRequested,
}: IFeedbackSuccessStep) => {
  return (
    <>
      <header className="w-full text-right">
        <CloseButton />
      </header>

      <div className="flex flex-col items-center py-6 w-[304px]">
        <span className="text-3xl">✅</span>
        <span className="text-xl mt-2">Agradecemos o feedback!</span>
        <button
          onClick={onFeedbackRestartRequested}
          className="py-2 px-6 mt-6 bg-zinc-800 rounded-md border-transparent text-sm leading-6 hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500"
        >
          Quero enviar outro
        </button>
      </div>
    </>
  );
};
