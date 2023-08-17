# Fetch MARVEL characters from official API

---

In this small, but very usefull project I just tried to fetch some data from official MARVEL API and displayed some cards with characters in it.

[Official MARVEL API](https://developer.marvel.com/)

You just need to sign up and get your key.

I got mine and used it to fetch data.

```
const [characters, setCharacters] = React.useState([]);
  React.useEffect(() => {
    fetch(
      'https://gateway.marvel.com:443/v1/public/characters?apikey=b9afc4de963a0318d4110e911fd9888d',
    )
      .then((response) => response.json())
      .then((json) => {
        setCharacters(json.data.results);
      })
      .catch((error) => console.error(error));
  }, []);
```

And also rendered the result to my project.

```
{characters.map((obj) => (
        <Cards name={obj.name} link={obj.thumbnail.path + '.jpg'} comics={obj.description} />
      ))}
```

Small, but very important project for everybody who starts his way with React.
