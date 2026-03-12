import { ReactFlow,Background, Controls, type Node, type NodeTypes, useEdgesState, type Connection, useNodesState,addEdge,ConnectionMode,type Edge} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

import { Square } from './components/nodes/Square';
import { useCallback } from 'react';

const nodeTypes : NodeTypes = {
  Square : Square,
};

const initialNodes : Node[] = [
  { 
    id : crypto.randomUUID(),
    type : 'Square',
    position : { x : 200, y : 400 },
    data : {label : ''},
  },
  {
    id : crypto.randomUUID(),
    type : 'Square',
    position : { x : 900, y : 400 },
    data : {label : ''},
  },
] satisfies Node[]

function App() {
 const [edges, setEdges, onEdgeChange] = useEdgesState([])
 const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)

 const Onconnect = useCallback((connection : Connection) => {
   return setEdges(edges => addEdge(connection, edges))
 }, [])

  return (
    <div className='w-screen h-screen '>
      <ReactFlow
       nodeTypes={nodeTypes}
       nodes={nodes}
       edges={edges}
       onEdgesChange={onEdgeChange}
       onConnect={Onconnect}
       onNodesChange={onNodesChange}
       connectionMode={ConnectionMode.Loose}
       >
        <Background  gap={12} size={1} color='#454545'/>
        <Controls />
      </ReactFlow>
    </div>
  )
}

export default App
