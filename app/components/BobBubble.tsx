import type { ReactNode } from "react";

type Mood = "neutral" | "happy" | "thinking" | "alert";

export default function BobBubble({
  children,
  mood = "neutral",
}: {
  children: ReactNode;
  mood?: Mood;
}) {
  return (
    <div className="hb-bob-row">
      <div className={`hb-bob-mascot ${mood}`}>
        <img src="/holobob-companion.png" alt="HoloBob" />
      </div>
      <div className="hb-bob-bubble">
        <div className="hb-bob-msg">{children}</div>
      </div>
    </div>
  );
}
