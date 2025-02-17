import { getServerTime } from "./getServerTime";

type Data = {
  content: string;
  time: string;
};

export async function getGameState(): Promise<Data> {
  const currentTime = getServerTime();
  return { content: "bar", time: currentTime.toLocaleTimeString() };
}
