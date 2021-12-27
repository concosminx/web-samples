//ES9


//rest - function
restParam(1, 2, 3, 4, 5);

function restParam(p1, p2, ...p3) {
  console.log(p1, p2, p3)
}

//rest - object
const myObject = {
  a: 1,
  b: 2,
  c: 3
};

const { a, ...x } = myObject;
console.log(a, x);


//finally
const urls = [
  'https://swapi.co/api/people/1',
  'https://swapi.co/api/people/2',
  'https://swapi.co/api/people/3',
  'https://swapi.co/api/people/4'
]

Promise.all(urls.map(url => fetch(url).then(people => people.json())))
  .then(array => {
    throw Error
    console.log('1', array[0])
    console.log('2', array[1])
    console.log('3', array[2])
    console.log('4', array[3])
  })
  .catch(err => console.log('error!', err))
  .finally(() => console.log('extra action here'))



const urls2 = [
  'https://jsonplaceholder.typicode.com/users',
  'https://jsonplaceholder.typicode.com/postss',
  'https://jsonplaceholder.typicode.com/albums'
]

//await
const getData = async function() {
  try {
    const [ users, posts, albums ] = await Promise.all(urls2.map(async function(url) {
        const response = await fetch(url);
        return response.json();
    }));
    console.log('users', users);
    console.log('posts', posts);
    console.log('albums', albums);
  } catch (err) {
    console.log('ooooooops', err);
  }
}

//for await of feature:
const loopThroughUrl = (urls2) => {
  for (url of urls2) {
    console.log(url)
  }
}


const getData2 = async function() {
  const arrayOfPromises = urls.map(url => fetch(url));
  for (const request of arrayOfPromises) {
    console.log(request);
  }

  for await (const request of arrayOfPromises) {
    const data = await request.json(); 
    console.log(data)
  }
}