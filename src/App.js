import React, { Suspense } from "react";
import { createResource } from "./PersonApi";
import { Person } from "./Person";
import { Num } from "./Num";
import { Name } from "./Name";

const resource = createResource();

function App() {
  return (
    <div className="App">
      <Suspense fallback={<h1>loading num...</h1>}>
        <Num resource={resource} />
      </Suspense>
      <Suspense fallback={<h1>loading person...</h1>}>
        <Person resource={resource} />
      </Suspense>
      <Suspense fallback={<h1>loading name...</h1>}>
        <Name resource={resource} />
      </Suspense>
    </div>
  );
}

export default App;