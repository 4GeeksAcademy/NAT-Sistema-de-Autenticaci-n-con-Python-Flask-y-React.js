const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			
			
			user: null,
			token: localStorage.getItem("token")
		},
		actions: {
			createUser: async (name, email, password) => {
				const call = {
					method: "POST",
					headers: {'Content-Type': 'application/json'},
					body: JSON.stringify({
						"name": name,
						"email": email,
						"password": password,
						"is_active": true 
					})
				}
				try {
					const response = await fetch('https://sturdy-giggle-q7qp9w9wp4x9fq6p-3001.app.github.dev/api/user/', call)
					console.log("fetch a users",response)
					const data = await response.json();

				if (!response.ok) {
					throw new Error("Failed to create user");
				}
				
				if (!data.message) {
					throw new Error("User creation failed");
				}
				return data;

				}catch(error) {
					console.log("no se puede registrar", error)
					throw error;
				}
			},
			login: async (email, password) => {
				console.log("login", email)
				const call = {
					method: "POST",
					Headers: {"Content-Type": "application/json",},
					body: JSON.stringify({
						"email": email,
						"password": password
					}),
				}
				const resp = await fetch("https://sturdy-giggle-q7qp9w9wp4x9fq6p-3001.app.github.dev/api/login", call);
				if (!resp.ok){
					throw new Error(error)
				}
				if(resp.status < 200 || resp.status >= 300){
					throw new Error("error en el login flux")
				}
				const data = await resp.json()

				localStorage.setItem("token", data.token)
				return data

			},



			// Use getActions to call a function within a fuction
			

			getMessage: async () => {
				try{
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				}catch(error){
					console.log("Error loading message from backend", error)
				}
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
