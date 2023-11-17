import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { convert, validate } from './functions';
import { Metric } from 'superbytes';

export const argsParse = () => {
  yargs(hideBin(process.argv))
    .usage('$ superbytes <bytes-number>')
    .usage('$ sb <bytes-number>')
    .option('precision', {
      alias: 'p',
      type: 'number',
      default: 2,
      description: 'Set number precision (max 10)',
    })
    .option('metric', {
      alias: 'm',
      type: 'string',
      default: 'iec',
      description: 'Set metric standard (iec | si)',
    })
    .command(
      '* [bytes]',
      'Convert bytes to a human readable string format',
      (yargs) => {
        yargs
          .positional('bytes', {
            describe: 'input bytes number',
            type: 'number',
            default: 0,
          })
          .check((argv) => {
            return validate(argv.bytes, argv.metric, argv.precision);
          });
      },
      (argv) => {
        console.log(convert(argv.bytes as number, argv.metric as Metric, argv.precision));
      }
    )
    .parse();
};
