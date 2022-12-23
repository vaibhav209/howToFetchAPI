export const getUsers = () => {
    return fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
    res.json()
    );
};

export const createUsers = (name)=>{
    return fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          costumer_name: name,
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }).then((res) => res.json());
};


