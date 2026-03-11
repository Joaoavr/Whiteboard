import { ReactFlow, Background, Controls } from '@xyflow/react';
import '@xyflow/react/dist/style.css';


function App() {
  return (
<div className='w-screen h-screen '>
      <ReactFlow>
        <Background  gap={12} size={2} color='#000'/>
        <Controls />
      </ReactFlow>
    </div>
  )
}

export default App
