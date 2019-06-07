const express = require('express');

const server = express();
server.use(express.json());
const projectRouter = require('./router/project.js');
const actionRouter = require('./router/action.js')

server.use('/api/projects', projectRouter);
server.use('/api/actions', actionRouter);


const port = process.env.PORT || 5000;
server.listen(port, () =>
 console.log(`\n** API running on http://localhost:${port} **\n`)
);