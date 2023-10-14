# trip-planner

### Install Visual Studio Code & Extensions
You can install Visual Studio Code [here](https://code.visualstudio.com/download).
Here are the required extensions for this project:
* Svelte for VS Code
* Prettier - Code formatter
* ESLint

### Installing Node on Windows
1. First, install NVM (node version manager) for Windows. This will allow us to manage and use different node versions. Download and install nvm-setup.exe [here](https://github.com/coreybutler/nvm-windows/releases/tag/1.1.11).
2. Check if you have installed NVM successfully by using the command `nvm --version`.
3. Install node by using the command `nvm install 18.18.1`
4. `nvm list` will list which versions of node are installed.
5. `nvm use 18.18.1` will allow you to use that node version.
6. Verify that node is working by running `node --version`

### Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

### Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
