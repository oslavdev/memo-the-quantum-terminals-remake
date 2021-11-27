# The Quantum Terminals Game - Client

Server side: https://github.com/oslavdev/memo-the-quantum-terminals-server

(In progress...) This is a remake of my old simple 2D procedurally generated puzzle game **The Quantum Terminals**. In this build I migrated project to **GraphQL** with **TypeScript**.

![Alt text](readme/cover.jpg?raw=true 'Cover')

### Technologies

- React.js
- Apollo
- TypeScript
- GraphQL

### Run in development mode

```
docker-compose up

or

yarn install

yarn dev

```

**CLIENT HOST:** http://localhost:8080/

### Environments

| NAME           |     DESCRIPTION      |
| -------------- | :------------------: |
| SERVER_API_URL | <server_graphql_url> |

### Testing

```sh
	$ yarn test

```

**For coverage**

```sh
	$ yarn test:coverage

```

**Update snapshots**

```sh
	$ yarn test:update
```
