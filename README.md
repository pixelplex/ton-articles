## Frontend

### To start working with MiniApps in Telegram, you need to create a bot. Follow these steps:

1. Open the Telegram app and find BotFather.
2. Start a dialogue with BotFather and use the `/start` command to begin creating a bot.
3. Enter the `/newbot` command and follow the instructions to create a new bot. You will need to choose a name and a unique username for the bot.
4. After successfully creating the bot, BotFather will provide you with an access token, which will be required for interacting with the Telegram API.

### Registering and Setting Up a MiniApp

To register and set up a MiniApp, follow these steps:

1. Go to the [Creating a Telegram Web App](https://core.telegram.org/bots/webapps) section in the official Telegram documentation.
2. Follow the instructions to register your MiniApp, set up the necessary parameters, and integrate it with the bot.

### Launch mini app

```bash
  npm install
  npm run dev
  npm install ngrok -g
  ngrok http 5173  
```

In the Telegram bot BotFather, edit the web app URL of your mini-app and insert the received ngrok link.


### Developing react app

```ts
  const { initDataRaw } = retrieveLaunchParams();
```

retrieveLaunchParams from @tma.js/sdk-react to get initialization data for the Telegram API.

tg-init-data: Passed as header to authenticate and provide context from the Telegram bot.

fetching the initial number of clicks

```ts
  useEffect(() => {
    fetch('http://localhost:3000/api/v1/me', {
      method: 'GET',
      headers: {
        'tg-init-data': initDataRaw || ''
      }
    }).then(response => response.json())
      .then((data: GetMeResponse) => setCount(data.clicks))
      .catch(error => console.error('Error:', error));
  }, []);
```

Defines the behavior when the button is clicked.
After a successful post request, it increments the count state.

```ts
  const handleClick = async () => {
    try {
      await fetch('http://localhost:3000/api/v1/click', {
        method: 'POST',
        headers: {
          'tg-init-data': initDataRaw || ''
        }
      })
      setCount(count => count + 1);
    } catch (e) {
      console.error(e);
    }
  }
```

## Backend

More information about running backend services can be found [here](./backend/README.md)
