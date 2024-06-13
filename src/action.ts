import * as core from '@actions/core';
import { generateName } from './name-generator';

const MAX_LENGTH = '48';

async function run() {
  try {
    await exec();
  } catch (err: any) {
    core.setFailed(err);
  }
}
run();

async function exec() {
  const maxLength = parseInt(core.getInput('max_length') || MAX_LENGTH);
  const count = Number.parseInt(core.getInput('count') || '1');

  core.info(`Generating ${count} name(s) with a max length of ${maxLength}...`);

  const results: string[] = [];
  for (let i = 0; i < count; i++) {
    results.push(generateName(maxLength));
  }

  core.info(JSON.stringify(results));
  core.setOutput('name', results[0]);
  core.setOutput('names', JSON.stringify(results));
  core.setOutput('names_comma_separated', results.join(', '));
}