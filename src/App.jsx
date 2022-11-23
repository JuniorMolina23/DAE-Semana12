import React, { useState } from 'react';
import PosPos from './modulos/pos/pages/PosPos';
 
const App = () => {
	const[count,setCount] = useState(0)
	return (
		<PosPos/>
	);
};
 
export default App;
