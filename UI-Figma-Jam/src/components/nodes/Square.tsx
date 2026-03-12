import { Handle, Position, type NodeProps } from "@xyflow/react";

export function Square({ data }: NodeProps) {
  return (
    <div className="bg-violet-500 rounded w-[200px] h-[200px] flex items-center justify-center text-white font-bold relative">
      <Handle id="right" type="source" position={Position.Right} className="!-right-5 !w-2 !h-2 !bg-blue-400/80"/>
      <Handle id="left" type="source" position={Position.Left} className="!-left-5 !w-2 !h-2 !bg-blue-400/80"/>
      <Handle id="top" type="source" position={Position.Top} className="!-top-5 !w-2 !h-2 !bg-blue-400/80"/>
      <Handle id="bottom" type="source" position={Position.Bottom} className="!-bottom-5 !w-2 !h-2 !bg-blue-400/80"/>
    </div>
  );
}