import { spawn } from 'node:child_process';

function runCommand(command: string, args: string[], cwd: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, {
      cwd,
      stdio: 'inherit',
      shell: process.platform === 'win32',
    });
    child.on('error', reject);
    child.on('exit', (code) => {
      if (code === 0) resolve();
      else reject(new Error(`\`${command} ${args.join(' ')}\` exited with code ${code ?? 'null'}`));
    });
  });
}

/**
 * Scaffold a Vite + React + TS project at `<parentDir>/<name>` using the
 * official `npm create vite@latest` template. We spawn the CLI rather than
 * inlining the template so we always get the upstream-recommended scaffold.
 */
export async function scaffoldVite(name: string, parentDir: string): Promise<void> {
  await runCommand('npm', ['create', 'vite@latest', name, '--', '--template', 'react-ts'], parentDir);
}

/**
 * Run `npm install` in `projectDir`.
 */
export async function npmInstall(projectDir: string): Promise<void> {
  await runCommand('npm', ['install'], projectDir);
}

/**
 * Install additional packages via `npm install <pkg...>`.
 */
export async function npmInstallPackages(packages: string[], projectDir: string): Promise<void> {
  await runCommand('npm', ['install', ...packages], projectDir);
}
