import { useState } from "react";

import { CloseButton } from "../CloseButton";

import bugImage from "../../images/bug.svg";
import cloudImage from "../../images/cloud.svg";
import lampImage from "../../images/lamp.svg";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";

export const feedbackTypes = {
  BUG: {
    title: "Problema",
    image: {
      source: bugImage,
      alt: "Imagem de um inseto",
    },
  },
  IDEA: {
    title: "Ideia",
    image: {
      source: lampImage,
      alt: "Imagem de uma lâmpada",
    },
  },
  OTHER: {
    title: "Outro",
    image: {
      source: cloudImage,
      alt: "Imagem de uma nuvem de pensamento",
    },
  },
};

export type FeedbackType = keyof typeof feedbackTypes;

export const WidgetForm = () => {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);

  function handleRestartFeedback() {
    setFeedbackType(null);
  }

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      {!feedbackType ? (
        <FeedbackTypeStep onFeedbackTypeChange={setFeedbackType} />
      ) : (
        <FeedbackContentStep
          onFeedbackRestartRequested={handleRestartFeedback}
          feedbackType={feedbackType}
        />
      )}

      <footer className="text-xs text-neutral-400">
        Feito por{" "}
        <a
          className="underline underline-offset-2"
          href="https://github.com/aurinojunior"
        >
          Aurino Junior
        </a>{" "}
        🚀
      </footer>
    </div>
  );
};
