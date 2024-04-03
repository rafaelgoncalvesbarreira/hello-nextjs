import { useState } from "react"
import { URL } from "url";

export type useWebWorkerType<T>=[
  startWork: () => void,
  busy: boolean,
  completed: boolean,
  result: T | undefined
]

export function useWebWorker<T>(webWorkerUrl: URL): useWebWorkerType<T>{
  const [busy, setBusy] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [result, setResult] = useState<T | undefined>(undefined);

  const startWork = () =>{
    if(window.Worker && !busy){
      const worker = new Worker(webWorkerUrl, { type: 'module' });
      // const worker = new Worker(webWorkerFile,{type: 'module'});
      worker.onmessage = function(e){
        setResult(e.data);
        setCompleted(true);
        setBusy(false);
        worker.terminate();
      }
      setBusy(true);
      setCompleted(false);
      worker.postMessage("");

      worker.onerror = function(e){
        console.log(e);
        setCompleted(true);
        setBusy(false);
      }
    }
  };

  return [
    startWork,
    busy,
    completed,
    result
  ];
};