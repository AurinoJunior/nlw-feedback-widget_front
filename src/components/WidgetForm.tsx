import { useState } from "react";

import { CloseButton } from "./CloseButton";

import bugImage from "../images/bug.svg";
import cloudImage from "../images/cloud.svg";
import lampImage from "../images/lamp.svg";

const feedbackTypes = {
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

type FeedbackType = keyof typeof feedbackTypes;

export const WidgetForm = () => {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      <header>
        <span className="text-xl leading-6">Deixe seu feedback</span>
        <CloseButton />
      </header>

      {!feedbackType ? (
        <div className="grid grid-cols-3 py-8 gap-2 w-full">
          {Object.entries(feedbackTypes).map(([key, value]) => {
            return (
              <button
                key={key}
                type="button"
                onClick={() => setFeedbackType(key as FeedbackType)}
                className="bg-zinc-800 rounded-lg py-5 w-24 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 outline-none"
              >
                <img alt={value.image.alt} src={value.image.source} />
                <span>{value.title}</span>
              </button>
            );
          })}
        </div>
      ) : (
        <p>Ótima escolha</p>
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
