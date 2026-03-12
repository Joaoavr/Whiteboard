import { BaseEdge, getSimpleBezierPath, type EdgeProps } from '@xyflow/react';
 
export function DefaultEdges({ id, sourceX, sourceY, targetX, targetY } : EdgeProps ) {
  const [edgePath] = getSimpleBezierPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
  });
 
  return (
    <>
      <BaseEdge id={id} path={edgePath} />
    </>
  );
}