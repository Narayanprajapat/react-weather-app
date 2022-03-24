import React, { createContext, useState } from 'react';
const UserContext = createContext();
export const SearchBar = () => {
	const [user, setUser] = useState('Narayan');
	return (
		<>
			<UserContext.Provider>
				<div>SearchBar {user}</div>
			</UserContext.Provider>
		</>
	);
};

// 
