"use server";

import { getGameState } from "../actions/getGameState";

export default async function GameStateDisplay() {
  const state = await getGameState();
  return (
    <div className="mb-2">
      Some Server Side Content: <div>{state.content}</div>
    </div>
  );
}
