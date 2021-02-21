const WebSocket = require('ws')
const https = require('https')
const http = require('http')
const express = require('express')
const { v4: uuidv4 } = require('uuid')

const connections = {}
const users = {}

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

const monsterIds = [
    '2600225', '2600209', '2600111'
]

const monster = {
    attack: true,
    id: '2600225',
    hp: 10000
}

app.get('/', (req, res) => {
    res.send('The backend is running.')
})

setInterval(function () {
    https.get("https://TODOTODOTODO.herokuapp.com/");
    console.log('server pinged');
}, 600000);

wss.on('connection', ws => {
    console.log('New Connection opened')
    const uuid = uuidv4();
    console.log('New user UUID:', uuid)
    ws.uuid = uuid
    connections[uuid] = ws
    ws.send('Successful connection!')
    
    broadcast(JSON.stringify(monster))
    updateUsers()

    ws.on('message', message => {
        let data;
        console.log(`New message from ${ws.uuid}:\n    ${message}`)
        try {
            data = JSON.parse(message) // {"command":"newUser","something":"Hi"}
        } catch (e) {
            console.log('Message had invalid JSON')
        }

        if (data.newUser) {
            ws.username = data.username
            users[data.username] = data.color
            updateUsers();
        }

        if (data.getUsers) {
            updateUsers();
        }
        
        if (data.attack) {
            monster.hp = monster.hp - data.dmg
            if (monster.hp <= 0) {
                monster.hp = 10000
                monster.id = monsterIds[Math.floor(Math.random() * monsterIds.length)]
            }
            broadcast(JSON.stringify(monster))
            return
        }

        console.log(data)
        broadcast(message);
    });

    ws.on('close', () => {
        console.log(`Connection closed ${ws.uuid}`)
        // close user connection
        delete connections[ws.uuid];
        delete users[ws.username];
        if (ws.username) {
            broadcast(JSON.stringify({ broadcast: true, message: `${ws.username} has left` }))
            updateUsers();
        }
    });
});

// start our server
server.listen(process.env.PORT || 1337, () => {
    console.log(`Server started on port ${server.address().port} :)`);
});

const updateUsers = () => {
    console.log(JSON.stringify(users, null, 4))
    broadcast(JSON.stringify({
        updateUserList: true,
        users
    }))
}

const broadcast = (message) => {
    wss.clients.forEach(client => {
        if (client.readyState === WebSocket.OPEN) {
            client.send(message);
        }
    });
}