import { ReactFlow,MiniMap,Background, Controls, type Node, type NodeTypes, useEdgesState, type Connection, useNodesState,addEdge,ConnectionMode,type Edge, type EdgeTypes,} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

import * as Toolbar from '@radix-ui/react-toolbar';

import { Square } from './components/nodes/Square';
import { useCallback } from 'react';
import { DefaultEdges } from './components/edges/DefaultEdges';

const nodeTypes : NodeTypes = {
  Square : Square,
};

const edgeTypes : EdgeTypes = {
  default : DefaultEdges,
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
 
  function onAddNode() {
  setNodes(nodes => [
    ...nodes,
    {
      id : crypto.randomUUID(),
    type : 'Square',
    position : { x : 550, y : 300 },
    data : {label : ''},
    },
   ])
   }

  return (
    <div className='w-screen h-screen '>
      <ReactFlow
       nodeTypes={nodeTypes}
       edgeTypes={edgeTypes}
       nodes={nodes}
       edges={edges}
       onEdgesChange={onEdgeChange}
       onConnect={Onconnect}
       onNodesChange={onNodesChange}
       connectionMode={ConnectionMode.Loose}
       defaultEdgeOptions={{
        type : 'default',
       }}
       >
        <Background  gap={12} size={1} color='#454545'/>
        <MiniMap nodeColor={nodeColor} />
        <Controls />
      </ReactFlow>
      <Toolbar.Root className="fixed bottom-20 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-lg border border-zinc-300 px-8 h-20 w-96 overflow-hidden">
           <Toolbar.Button onClick={onAddNode}  className='w-32 h-32 bg-violet-500 mt-6 rounded transition-transform hover:-translate-y-2'/>
      </Toolbar.Root>

    </div>
  )
}
function nodeColor(node: Node) {
  switch (node.type) {
    default:
      return '#8b5cf6';
  }
}

export default App
