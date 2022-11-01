import server from './src/app.js'
import { PORT } from './config/config.js'






server.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
});

