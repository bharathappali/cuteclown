export type FrameTask = () => void;

export type Scheduler = {
  read(task: FrameTask): void;
  write(task: FrameTask): void;
  cancel(): void;
};

export function createScheduler(
  schedule: (flush: FrameTask) => number,
  cancelFrame: (id: number) => void,
): Scheduler {
  let reads: FrameTask[] = [];
  let writes: FrameTask[] = [];
  let frame: number | undefined;

  function flush() {
    frame = undefined;
    const readNow = reads;
    const writeNow = writes;
    reads = [];
    writes = [];
    for (const task of readNow) {
      task();
    }
    for (const task of writeNow) {
      task();
    }
  }

  function ensure() {
    if (frame !== undefined) {
      return;
    }
    frame = schedule(flush);
  }

  return {
    read(task) {
      reads.push(task);
      ensure();
    },
    write(task) {
      writes.push(task);
      ensure();
    },
    cancel() {
      if (frame !== undefined) {
        cancelFrame(frame);
        frame = undefined;
      }
      reads = [];
      writes = [];
    },
  };
}
