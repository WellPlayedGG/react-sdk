import chalk from 'chalk';

export const log = {
  info: (msg: string) => console.log(chalk.blue('info'), msg),
  success: (msg: string) => console.log(chalk.green('success'), msg),
  warn: (msg: string) => console.log(chalk.yellow('warn'), msg),
  error: (msg: string) => console.error(chalk.red('error'), msg),
  step: (num: number, msg: string) => console.log(chalk.dim(`[${num}]`), msg),
};
