import {runDb} from './repositories/db'
import {app, port} from './init-app';

const startApp = async () => {
    await runDb()
    app.listen(port, () => {
        console.log(`App started: ${port}`)
    })
}

startApp()
