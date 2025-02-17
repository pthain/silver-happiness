type Data = {
  content: string;
};

export async function getGameState(): Promise<Data> {
  return { content: "foo" };
}
