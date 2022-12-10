const url = "https://ec2-35-180-148-54.eu-west-3.compute.amazonaws.com/api"
const dest = "/product";


const getAll = () => {
  return fetch(url.concat(dest))
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

const createOne = (data) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
        crossdomain: true,
        body: JSON.stringify({
            "title":data.title,
            "description":data.description,
            "cost":parseFloat(data.cost),
            "userName":data.userName
        })
    };
  return fetch(url.concat(dest), requestOptions)
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

const deleteOne = (id) => {
  return fetch(url.concat(dest + "/" + id),{ method: 'DELETE' })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

const updateOne = (data) => {
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
        crossdomain: true,
        body: JSON.stringify({
            "ID":data.ID,
            "title":data.title,
            "description":data.description,
            "cost":parseFloat(data.cost),
            "userName":data.userName
        })
    };
  return fetch(url.concat(dest),requestOptions)
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export { getAll, createOne, updateOne, deleteOne };
