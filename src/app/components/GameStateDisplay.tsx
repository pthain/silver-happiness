"use server";

import { getGameState } from "../actions/getGameState";
import ServerTime from "./ServerTime";

export default async function GameStateDisplay() {
  //const state = await getGameState();
  return (
    <div className="mb-2">
      Some Server Side Content:
      <div>
        {/* <div>Foo: {state.content}</div> */}
        <ServerTime />
      </div>
    </div>
  );
}
